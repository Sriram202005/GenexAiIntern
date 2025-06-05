import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const JobApplicationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prefillPosition = params.get("position");
    if (prefillPosition) {
      setForm((prev) => ({ ...prev, position: prefillPosition }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      position: form.position.trim(),
      linkedin: form.linkedin.trim(),
      coverLetter: form.coverLetter.trim(),
    };

    if (!trimmed.name) newErrors.name = "Full name is required.";

    if (!trimmed.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(trimmed.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!trimmed.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{10,15}$/.test(trimmed.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits).";
    }

    if (!trimmed.position) newErrors.position = "Position is required.";

    if (!form.resume) {
      newErrors.resume = "Please upload your resume.";
    } else {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(form.resume.type)) {
        newErrors.resume = "Only PDF, DOC, or DOCX files are allowed.";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Application submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      coverLetter: "",
      resume: null,
    });
    setErrors({});
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-6 text-black border border-gray-300">
        {/* Header */}
        <div className="mb-6 text-center relative">
          <h3 className="text-2xl font-bold">Job Application</h3>
          <Link
            to="/jobs"
            className="absolute top-0 right-0 text-2xl font-bold text-red-700 hover:text-red-900"
            title="Cancel"
          >
            ×
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <label className="block mb-2 font-medium" htmlFor="name">
            Full Name*
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-2 mb-1 rounded ${
              errors.name ? "border-red-500" : "border border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name}</p>}

          {/* Email */}
          <label className="block mb-2 font-medium" htmlFor="email">
            Email Address*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-2 mb-1 rounded ${
              errors.email ? "border-red-500" : "border border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

          {/* Phone */}
          <label className="block mb-2 font-medium" htmlFor="phone">
            Phone Number*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={`w-full p-2 mb-1 rounded ${
              errors.phone ? "border-red-500" : "border border-gray-300"
            }`}
            placeholder="e.g. +91-9876543210"
          />
          {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

          {/* Position */}
          <label className="block mb-2 font-medium" htmlFor="position">
            Position Applying For*
          </label>
          <input
            id="position"
            name="position"
            value={form.position}
            onChange={handleChange}
            className={`w-full p-2 mb-1 rounded ${
              errors.position ? "border-red-500" : "border border-gray-300"
            }`}
            placeholder="e.g. Full Stack Developer"
          />
          {errors.position && <p className="text-red-600 text-sm mb-2">{errors.position}</p>}

          {/* LinkedIn */}
          <label className="block mb-2 font-medium" htmlFor="linkedin">
            LinkedIn Profile (optional)
          </label>
          <input
            id="linkedin"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border border-gray-300"
            placeholder="LinkedIn URL"
          />

          {/* Resume */}
          <label className="block mb-2 font-medium" htmlFor="resume">
            Upload Resume*
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-2 mb-1 rounded border border-gray-300"
          />
          {form.resume && (
            <p className="text-green-700 text-sm mb-1">Uploaded: {form.resume.name}</p>
          )}
          {errors.resume && <p className="text-red-600 text-sm mb-2">{errors.resume}</p>}

          {/* Cover Letter */}
          <label className="block mb-2 font-medium" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 mb-4 rounded border border-gray-300"
            placeholder="Write a short note (optional)"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-red-900 hover:bg-red-800 text-white font-semibold rounded transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;


// import { useState } from 'react';

// const JobApplicationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     resume: '',
//     coverLetter: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // TODO: Add backend integration or API call
//     onClose(); // close modal after submit
//   };

//   return (
//     <>
//       {/* Backdrop & centering */}
//       <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start sm:items-center overflow-y-auto p-4 z-50">
//         {/* Form card */}
//         <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 relative">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-2xl font-bold">Job Application Form</h3>
//             <button
//               className="text-gray-500 hover:text-gray-700 text-xl"
//               onClick={onClose}
//             >
//               ×
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Resume</label>
//               <input
//                 type="file"
//                 name="resume"
//                 required
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Cover Letter</label>
//               <textarea
//                 name="coverLetter"
//                 rows="4"
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 className="w-full mt-1 p-2 border rounded-md"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-maroon-600 text-white p-2 rounded-md hover:bg-maroon-700"
//             >
//               Submit Application
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobApplicationForm;
