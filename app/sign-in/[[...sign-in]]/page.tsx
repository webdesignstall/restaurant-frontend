import { SignIn } from '@clerk/nextjs'
import TopNavbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Page() {
    return (
        <>
            <TopNavbar />
            <div className="flex justify-center items-center h-[80vh] ">
                <SignIn />
            </div>
            <Footer />
        </>

    )
}