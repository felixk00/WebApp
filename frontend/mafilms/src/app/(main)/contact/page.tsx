import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Contact',
  description: 'Contact Form',
};

export default function Contact() {



  return (
    <div className="mx-auto max-w-2xl px-4 my-10">
      <h1>Contact us</h1>

      <ContactForm />
    </div>
  );
}