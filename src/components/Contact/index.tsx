import SectionTitle from "../Common/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Contact Us"
          paragraph="Have questions about our research or interested in collaboration? We'd love to hear from you."
          center
        />

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <ContactForm />
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
