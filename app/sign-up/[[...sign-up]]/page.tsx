import { SignUp } from '@clerk/nextjs'
import TopNavbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Page() {
    return (
        <>
            <TopNavbar/>
            <div className="flex justify-center items-center min-h-screen ">
                <SignUp/>
            </div>
            <Footer/>
        </>
    )
}