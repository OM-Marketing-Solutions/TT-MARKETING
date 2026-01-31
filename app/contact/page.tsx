import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - TT Marketing | Get in Touch',
    description: 'Contact TT Marketing for precision weighing solutions. Our experts are ready to help with quotes, technical support, and custom requirements.',
};

export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-black">
            <ContactForm />
        </main>
    );
}
