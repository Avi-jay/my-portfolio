function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-2">Contact</p>
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>

        <p className="text-gray-300 mb-6">
          Have a project in mind or want to say hello?
        </p>

        <a
          href="mailto:your-email@gmail.com"
          className="inline-block px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;