"use client";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Load Environment Variables
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !autoReplyID || !userID) {
      toast.error("Configuration error. Please contact support.");
      return;
    }

    const emailParams = {
      name: userInput.name,
      email: userInput.email,
      message: userInput.message,
    };

    setIsSubmitting(true);

    // admin email promise
    const sendAdmin = emailjs.send(serviceID, templateID, emailParams, userID);

    // 2. auto-reply promise
    const sendAutoReply = emailjs.send(serviceID, autoReplyID, emailParams, userID);

    toast
      .promise(Promise.all([sendAdmin, sendAutoReply]), {
        pending: "Sending your message...",
        success: "Message sent! Check your inbox for confirmation.",
        error: "Failed to send message. Please try again later.",
      })
      .then(() => {
        setUserInput({ name: "", email: "", message: "" });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 py-30 text-center w-3/4" id="contact-me">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
        <p className="mt-4 text-lg text-slate-600">
          I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel
          free to reach out.
        </p>

        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 text-left">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium leading-none">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="mt-2"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium leading-none">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="mt-2"
                value={userInput.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium leading-none">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="mt-2"
                rows={4}
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" theme="colored" autoClose={5000} />
    </section>
  );
}
