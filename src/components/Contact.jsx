import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-2">Contact</p>

        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-300 mb-10">
          Have a project in mind or want to say hello? Feel free to contact me.
        </p>

        <div className="space-y-5 mb-10">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-xl" />
            <a
              href="mailto:kavindaa805@gmail.com"
              className="hover:text-blue-400"
            >
              kavindaa805@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-400 text-xl" />
            <a
              href="tel:+94776091074"
              className="hover:text-blue-400"
            >
              +94 77 6091074
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaFacebook className="text-blue-400 text-xl" />
            <a
              href="https://facebook.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Facebook Profile
            </a>
          </div>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/Avi-jay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/avishka-jayakodi-797410343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;