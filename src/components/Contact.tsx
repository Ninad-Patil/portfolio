import React, { useState, useRef, FormEvent } from "react";
import SectionTitle from "./ui/SectionTitle";
import { Github as GitHub, Linkedin, Mail } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, 0.1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! I will get back to you soon."
      );
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      // Clear the message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle>Get In Touch</SectionTitle>

        <div
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-12 transition-all duration-1000 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out to me for collaborations, opportunities, or
              just to say hello! I'll do my best to get back to you as soon as
              possible.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </h4>
                  <a
                    href="mailto:ninad.patil198@gmail.com"
                    className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ninad.patil198@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ninad-Patil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ninad-patil-35a0661b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
