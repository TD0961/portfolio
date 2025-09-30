import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-7 h-7 text-blue-500" />,
      link: "mailto:tensaedeme61@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-7 h-7 text-blue-500" />,
      link: "https://www.linkedin.com/in/tensae-deme-a18359315/",
    },
    {
      name: "Telegram",
      icon: <Send className="w-7 h-7 text-blue-500" />,
      link: "https://t.me/Myhopeisu61",
    },
    {
      name: "Phone",
      icon: <Phone className="w-7 h-7 text-blue-500" />,
      link: "tel:+25161189659",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl font-bold mb-6"
      >
        <span className="text-blue-500">Get in Touch</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-300 mb-10 max-w-xl text-center"
      >
        I’ll help you in your next project. Contact me through the details below!
      </motion.p>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row md:space-x-10 gap-6 text-lg font-medium">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            {contact.icon}
            {contact.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
