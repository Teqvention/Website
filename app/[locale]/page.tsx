import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import dynamic from 'next/dynamic';


const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact));

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Process />
            <Testimonials />
            <Contact />
            <FAQ />
            <Footer />
        </>
    );
}
