import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Contact',
  description: 'Contact Form',
};

export default function Contact() {



  return (
    <div className="mx-auto max-w-2xl px-4 my-10">
      <h1 className="text-5xl font-bold leading-relaxed">Contact us</h1>

      <p className="font-bold text-2xl">
        MA Films
      </p>
      <p className="text-2xl">
        Rainweg 3
      </p>
      <p className="text-2xl">
        75181 Pforzheim
      </p>
      <p className="text-2xl">
        Tel. 01237654654
      </p>
      <br></br>


      <p className="text-2xl font-bold">
        Interested in a photoshooting or any other requests? Any questions? Just contact us via phone
        or use our contact form! We are happy to hear from you.
      </p>
      <br></br>

      <ContactForm />



    </div>

  );
}