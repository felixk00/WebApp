import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Contact',
  description: 'Contact Form',
};

export default function Contact() {



  return (
    <div className="mx-auto max-w-2xl px-4 my-10">
      <h1 className="text-4xl font-bold leading-relaxed">Contact us</h1>
      
      <p className="text-1xl">If you want to get in touch just fill
      out this form and we will look in to it. Give us <b>some details</b> about your request
      in the <b>message field.</b> We are happy to answer your questions.</p>
     

      <ContactForm />
    </div>
  );
}