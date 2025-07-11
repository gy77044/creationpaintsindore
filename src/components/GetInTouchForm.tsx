import React, { useState } from 'react';

const features = [
  {
    title: "Power in Your Hands",
    desc: "Enjoy zero contact service with Express Painting App at your fingertips",
    icon: <span className="text-white text-xl">✔</span>,
  },
  {
    title: "Supervised Painting",
    desc: "Trained and certified painters with expert supervision for a safe and faster painting service.",
    icon: <span className="text-white text-xl">🕒</span>,
  },
  {
    title: "Time-Saving Tools",
    desc: "Power painting tools that save time and speed up On-Time delivery.",
    icon: <span className="text-white text-xl">⏱</span>,
  },
  {
    title: "Low-Noise and Cleaner Painting",
    desc: "Our mechanised tools and expert team ensure a smooth and pleasant painting and renovation experience.",
    icon: <span className="text-white text-xl">🧹</span>,
  },
];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    email: "",
    language: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xzzgkpnd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full scroll-smooth py-16 flex justify-center items-center min-h-[65vh]">
      <div className="w-full max-w-6xl rounded-3xl bg-white shadow-xl mx-2 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Feature List */}
        {/* <div className="bg-[#eef1f1] flex-1 p-8 md:p-12 flex flex-col justify-center rounded-2xl md:rounded-none md:rounded-l-3xl">
          <ul className="space-y-8">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-5">
                <span className="bg-[#111926] rounded-full flex items-center justify-center w-10 h-10 mt-1">
                  {feature.icon}
                </span>
                <span>
                  <div className="font-semibold text-lg text-[#111926] mb-1">
                    {feature.title}
                  </div>
                  <div className="text-[#111926] text-base leading-snug">
                    {feature.desc}
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Right: Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-[430px] w-full mx-auto">
            <h2 className="text-2xl font-light text-[#323232] mb-7">
              Let Our Experts Help You
            </h2>

            {!submitted ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone No*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode*"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                >
                  <option value="">Select Your Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Your message (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900"
                  rows={4}
                />

                <label className="inline-flex items-center text-[#80a297] text-sm">
                  <input type="checkbox" className="accent-[#89a7a3] mr-2" />
                  Get updates on WhatsApp
                </label>
                <label className="inline-flex items-center text-[#80a297] text-sm">
                  <input type="checkbox" required className="accent-[#89a7a3] mr-2" />
                  I Agree To All
                  <a href="#" className="ml-1 underline text-[#6b8482]">Terms And Conditions*</a>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#111926] text-white text-lg rounded-md py-2 hover:bg-[#111926cc]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-green-700 font-medium text-center text-lg mt-4">
                🎉 Thank you! Your query has been submitted successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
