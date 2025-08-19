import { useState } from "react";

const ModalContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("Thanks for contacting us! We'll connect you shortly. ✅");
     
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/20">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text mb-6">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input Field */}
        {["name", "mobile", "email"].map((field) => (
          <div key={field}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "name"
                  ? "Your Name"
                  : field === "mobile"
                  ? "Your Contact Number"
                  : "Your Email"
              }
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-white/70 rounded-xl px-4 py-3 shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
            />
            {errors[field] && (
              <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        {/* Message */}
        <div>
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white/70 rounded-xl px-4 py-3 shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden"
        >
          <span className="relative z-10">Submit</span>
          <div className="absolute inset-0 bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
        </button>

        {/* Status Message */}
        {status && (
          <p
            className={`text-sm mt-3 text-center font-medium transition-opacity duration-500 ${
              status.includes("Thanks") ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ModalContactForm;
