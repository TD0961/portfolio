import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send, CheckCircle, Loader } from "lucide-react";

const socials = [
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    link: "mailto:tensaedeme61@gmail.com",
    label: "tensaedeme61@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/tensae-deme-a18359315/",
    label: "linkedin.com/in/tensae-deme",
  },
  {
    name: "Telegram",
    icon: <Send className="w-5 h-5" />,
    link: "https://t.me/Myhopeisu61",
    label: "@Myhopeisu61",
  },
  {
    name: "Phone",
    icon: <Phone className="w-5 h-5" />,
    link: "tel:+25161189659",
    label: "+251 61 189 659",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      // ATENTION: Replace YOUR_FORM_ID with your real Formspree ID.
      // Get it at https://formspree.io by creating a new form.
      // Example: fetch("https://formspree.io/f/xpwzabcd", ...
      const res = await fetch("https://formspree.io/f/xwvrpbaa", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl font-bold mb-3 text-blue-400"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-400 mb-12 max-w-md text-center text-sm"
      >
        Have a project in mind or want to work together? Drop me a message and I'll get back to you.
      </motion.p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
              <CheckCircle className="w-16 h-16 text-blue-400" />
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-gray-400 text-center text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-2 px-5 py-2 border border-blue-500 text-blue-400 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-red-400 text-xs">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="flex items-center justify-center gap-2 mt-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center gap-4"
        >
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            Or reach me directly
          </h3>
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <span className="p-2 bg-blue-600/15 rounded-lg text-blue-400 group-hover:bg-blue-600/30 transition">
                {s.icon}
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{s.name}</p>
                <p className="text-sm text-gray-200 group-hover:text-blue-400 transition">
                  {s.label}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
