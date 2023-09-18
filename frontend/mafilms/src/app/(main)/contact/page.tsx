import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Contact',
  description: 'Contact Form',
};

export default function Contact() {



  return (
    <div className="mx-auto max-w-2xl px-4 my-10">
      <h1 className="text-5xl font-bold leading-relaxed">Contact us</h1>

      <p className="text-bold text-2xl">
        MA Films
      </p>

      <p className="text-2xl">
        76139 Karlsruhe
      </p>
      <p className="text-2xl">
        xxxx
      </p>
      <br></br>
      <div>
        <ContactForm />
      </div>


    </div>

  );
}