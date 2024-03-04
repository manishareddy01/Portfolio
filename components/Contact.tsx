import Link from "next/link";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <SectionTitle title="What's next" titleNo='04'/>
      <h2 className=" text-4xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        If you think we can have a great conversation, send a connection request on LinkedIn or if you want to enquire anything please drop by and say hi, I will always respond :)
      </p>

      <a href="mailto:manishaaddula@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
