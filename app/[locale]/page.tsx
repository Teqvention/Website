import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import dynamic from 'next/dynamic';


const Services = dynamic(() => import('@/components/Services').then(mod => mod.Services));
const Process = dynamic(() => import('@/components/Process').then(mod => mod.Process));
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));
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
