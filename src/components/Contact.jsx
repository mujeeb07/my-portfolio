import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, LocationIcon } from "./icons";
import { profile } from "../data/portfolioData";
import emailjs from "@emailjs/browser";
let myServiceId = import.meta.env.VITE_MY_SERVICE_ID;
let myTemplateId = import.meta.env.VITE_MY_TEMPLATE_ID;
let myPublicId = import.meta.env.VITE_MY_PUBLIC_KEY;


const initialForm = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setIsSubmitted(false);
    return;
  }

  try {
    await emailjs.send(
      myServiceId,
      myTemplateId,
      {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      },
      myPublicId
    );

    setIsSubmitted(true);
    setFormValues(initialForm);
    setErrors({});
  } catch (error) {
    console.error(error);
    setIsSubmitted(false);
  }
  };

  return (
    <section id="contact" className="section-spacing bg-white dark:bg-[#111111]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let us connect and build something impactful"
            description="Feel free to reach out for full-time opportunities, freelance projects, or technical collaboration."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="glass-card space-y-5 p-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-zinc-700 transition hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300"
              >
                <MailIcon className="h-5 w-5" />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 transition hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300"
              >
                <GitHubIcon className="h-5 w-5" />
                <span>github.com/mujeeb07</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 transition hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300"
              >
                <LinkedInIcon className="h-5 w-5" />
                <span>linkedin.com/in/mujeebrahman</span>
              </a>
              <a
              href="tel:755989642"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 transition hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+91 755 986 9642</span>
              </a>
              <p
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-700 transition hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300"
              >
                <LocationIcon className="h-5 w-5" />
                <span>Kerala, INDIA</span>
              </p>
            </aside>

            <form noValidate onSubmit={handleSubmit} className="glass-card p-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-cyan-600 dark:border-zinc-700 dark:bg-[#0f0f0f]"
                  placeholder="Your full name"
                />
                {errors.name ? <p className="mt-1 text-xs text-rose-500">{errors.name}</p> : null}
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-cyan-600 dark:border-zinc-700 dark:bg-[#0f0f0f]"
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="mt-1 text-xs text-rose-500">{errors.email}</p> : null}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-cyan-600 dark:border-zinc-700 dark:bg-[#0f0f0f]"
                  placeholder="Tell me about your requirement..."
                />
                {errors.message ? <p className="mt-1 text-xs text-rose-500">{errors.message}</p> : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
                {isSubmitted ? (
                  <p className="text-sm text-cyan-700 dark:text-cyan-300">
                    Thanks. Your message is validated and ready to send.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
