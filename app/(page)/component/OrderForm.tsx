import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]
import React from 'react'

export default function OrderForm() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <div className='h-fit bg-[#595e48] md:p-10 px-6 py-14 -mt-2 z-20'>
            <div className='lg:grid grid-cols-5 max-w-6xl m-auto h-full gap-10'>
                <div className='flex flex-col justify-center items-start col-span-2'>
                    <div className='pb-4'>
                        <p className='lg:text-6xl text-[2.8rem] font-extrabold text-white font-bebas'>Join The Club</p>
                    </div>
                    <div className='pb-4'>
                        <p className='text-white text-2xl'>Become a True Insider – Join for news, special offers & more.</p>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='md:grid flex space-y-2 md:space-y-0 flex-col md:grid-cols-2 gap-x-10 gap-y-6'>
                        <div>
                            <label className='text-white font-medium text-xl pb-2 pl-3 block' htmlFor="">First Name</label>
                            <input className='w-full rounded-2xl py-3 px-4' placeholder='First Name' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-xl pb-2 pl-3 block' htmlFor="">Last name</label>
                            <input className='w-full rounded-2xl py-3 px-4' placeholder='Last name' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-xl pb-2 pl-3 block' htmlFor="">Email</label>
                            <input className='w-full rounded-2xl py-3 px-4' placeholder='Email' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-xl pb-2 pl-3 block' htmlFor="">Phone number</label>
                            <input className='w-full rounded-2xl py-3 px-4' placeholder='Phone number' type="text" />
                        </div>
                        <div className='col-span-2'>
                            <label className='text-white font-medium text-xl pb-2 pl-3 block' htmlFor="">Preferred Restaurant Location</label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between rounded-2xl py-4"
                                    >
                                        {value
                                            ? frameworks.find((framework) => framework.value === value)?.label
                                            : "Select framework..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search framework..." />
                                        <CommandList>
                                            <CommandEmpty>No framework found.</CommandEmpty>
                                            <CommandGroup>
                                                {frameworks.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        {framework.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                value === framework.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-white'>
                                By submitting this form and signing up for email marketing and texts, you consent to receive marketing messages (e.g. promos, cart reminders) from True Food Kitchen at the number & email provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy & Terms.
                            </p>
                        </div>
                        <div className='col-span-2'>
                            <Button className='bg-white text-black rounded-full px-8' disabled>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
