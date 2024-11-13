"use client";

import MagicButton from "@/components/MagicButton";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import React, { FormEvent, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Footer from "@/components/Footer";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div>
      <div className="min-h-screen bg-black-100 py-12 pt-32 relative">
        {" "}
        {/* Ensure the container is relative */}
        {/* BackgroundBeams with adjusted z-index */}
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        {/* Content with higher z-index */}
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          {" "}
          {/* Add relative and z-10 to bring content to the front */}
          <h1 className="heading my-7">
            Contact
            <span className="text-purple"> Me!</span>
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto mb-5 text-sm text-center">
            Interested in working together or discussing new ideas? I&apos;d
            love to hear from you—let&apos;s create something amazing!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
            <MagicButton
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
            />
          </form>
        </div>
      </div>
      <div className="relative border-t-2 bg-black-100 flex justify-center items-center flex-col pb-4 pt-24 overflow-clip mx-auto sm:px-10 px-5">
        <Footer />
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
