"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/contact";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // const onSubmit = async (data: ContactFormData) => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     });
  //     if (res.ok) {
  //       toast.success("Message received! ✦");
  //       reset();
  //     } else throw new Error();
  //   } catch (err) {
  //     toast.error("Error sending message.");
  //   } finally {
  //     setLoading(false);
  //   }



  const onSubmit = async (data: ContactFormData) => {
    // ✦ Promise Toast: Ye loading, success aur error ek saath handle karega
    const sendMailPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) throw new Error();
      reset(); // Success hone par form clear karein
      return res;
    });

    toast.promise(sendMailPromise, {
      loading: 'Sending your message... ✦',
      success: 'Message sent successfully! I will contact you soon. ✅',
      error: 'Could not send message. Please try again later. ❌',
    }, {
      style: {
        borderRadius: '15px',
        background: '#004d2c',
        color: '#fff',
        fontWeight: 'bold',
      },
      success: {
        duration: 5000,
        iconTheme: {
          primary: '#4ade80',
          secondary: '#fff',
        },
      },
    });

  };

  return (
    <section className="contact-section" id="contact">
      <Toaster />
      <div className="about-grid"> {/* Same grid as About section */}

        {/* Left Side: Hanging Star Design */}
        <div className="star-hanging-container">
          <div className="hanging-line h-line-1"><span className="star-point">✦</span></div>
          <div className="hanging-line h-line-2"><span className="star-point">✦</span></div>
          <div className="hanging-line h-line-3"><span className="star-point">✦</span></div>
        </div>

        {/* Right Side: Contact Layout */}
        <div className="about-glass-card">
          <span className="about-tag">_SAY_HELLO</span>
          <h2 className="about-title">Let's start a project together<span className="text-[#4ade80]">.</span></h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input {...register("firstName")} placeholder="First Name" className={`p-4 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-100'} bg-gray-50/50 outline-none focus:border-[#4ade80]`} />
                {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
              </div>
              <div className="flex flex-col">
                <input {...register("lastName")} placeholder="Last Name" className={`p-4 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-100'} bg-gray-50/50 outline-none focus:border-[#4ade80]`} />
                {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <input {...register("email")} placeholder="Email Address" className={`p-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-100'} bg-gray-50/50 outline-none focus:border-[#4ade80]`} />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col">
              <input {...register("phone")} placeholder="Phone Number (e.g. +91...)" className={`p-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-100'} bg-gray-50/50 outline-none focus:border-[#4ade80]`} />
              {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
            </div>

            <div className="flex flex-col">
              <textarea {...register("message")} placeholder="Tell me about your project..." rows={4} className={`p-4 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-100'} bg-gray-50/50 outline-none focus:border-[#4ade80] resize-none`} />
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
            </div>

            <button type="submit" disabled={loading} className="get-started-btn w-full py-4 text-lg">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}