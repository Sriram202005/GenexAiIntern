import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobApplicationForm = () => {
  const navigate = useNavigate();

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

  const validate = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be a 10‑digit number";
    }

    // Position — now must be at least 8 characters
    if (!form.position.trim()) {
      newErrors.position = "Position is required";
    } else if (form.position.trim().length < 8) {
      newErrors.position = "Position must be at least 8 characters";
    }

    // LinkedIn (optional)
    if (
      form.linkedin &&
      !/^https:\/\/(www\.)?linkedin\.com\/.*$/.test(form.linkedin)
    ) {
      newErrors.linkedin = "LinkedIn profile must be a valid LinkedIn URL";
    }

    // Resume file type
    if (!form.resume) {
      newErrors.resume = "Resume is required";
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(form.resume.type)
    ) {
      newErrors.resume = "Only PDF, DOC, or DOCX files are allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", form);
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
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      {/* Close (×) Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
        aria-label="Close form"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-4 text-red-900">Job Application Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Position */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Position 
          </label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            minLength={8}
            required
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            LinkedIn Profile (optional)
          </label>
          <input
            type="url"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://www.linkedin.com/in/yourprofile"
          />
          {errors.linkedin && (
            <p className="text-red-500 text-sm">{errors.linkedin}</p>
          )}
        </div>

        {/* Cover Letter */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Cover Letter (optional)
          </label>
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        {/* Resume */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full"
            required
          />
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-red-800 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
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
