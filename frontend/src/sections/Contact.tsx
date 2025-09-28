const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="space-x-4">
        <a
          href="mailto:your@email.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
