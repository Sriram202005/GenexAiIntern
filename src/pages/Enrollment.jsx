import React, { useState } from "react";
import { Link } from "react-router-dom";

const Enrollment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    courseType: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const courseTypes = [
    { label: "--- Select ---", value: "" },
    { label: "Corporate Training", value: "Corporate Training" },
    { label: "Career Augmentation Training", value: "Career Augmentation Training" },
  ];

  const courses = [
    { label: "--- Select ---", value: "" },
    { label: "Change in Technology - $450 per person", value: "Change in Technology - $450 per person" },
    { label: "Fresher - $500 per person", value: "Fresher - $500 per person" },
  ];

  /** ----------------------  Helpers  ---------------------- **/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    // Name: required, min 8 chars
    if (!form.name.trim()) {
      newErrors.name = "This field is required.";
    } else if (form.name.trim().length < 8) {
      newErrors.name = "Name must be at least 8 characters.";
    }

    // Email: required, valid format
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[\w.-]+@[\w.-]+\.[\w]{2,}$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone: required, exactly 10 digits
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^\\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10‑digit phone number.";
    }

    // Course selections
    if (!form.courseType) newErrors.courseType = "Please select your class.";
    if (!form.course) newErrors.course = "Please select your course.";

    // Message: optional, 250–350 characters if present
    if (form.message.trim()) {
      const len = form.message.trim().length;
      if (len < 250 || len > 350) {
        newErrors.message = "Message must be 250‑350 characters.";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Success
    setErrors({});
    alert("Thank you for booking! We'll contact you soon.");
    setForm({
      name: "",
      email: "",
      phone: "",
      courseType: "",
      course: "",
      message: "",
    });
  };

  /** ----------------------  JSX  ---------------------- **/
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow-md mt-10">
      {/* heading + close */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-bold text-red-800">Enrollment Form</h3>
        <Link
          to="/trainings"
          className="text-gray-500 hover:text-red-600 text-2xl font-bold"
          title="Cancel"
        >
          ×
        </Link>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label className="block mb-2 font-medium" htmlFor="name">
          Person Name*
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          required
        />
        {errors.name && (
          <p className="text-red-600 text-sm mb-2">{errors.name}</p>
        )}

        {/* Email */}
        <label className="block mb-2 font-medium" htmlFor="email">
          Person Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          required
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email}</p>
        )}

        {/* Phone */}
        <label className="block mb-2 font-medium" htmlFor="phone">
          Phone No*
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          required
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mb-2">{errors.phone}</p>
        )}

        {/* Course Type */}
        <label className="block mb-2 font-medium" htmlFor="courseType">
          Select Your Classes*
        </label>
        <select
          id="courseType"
          name="courseType"
          value={form.courseType}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border rounded ${
            errors.courseType ? "border-red-500" : "border-gray-300"
          }`}
          required
        >
          {courseTypes.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.courseType && (
          <p className="text-red-600 text-sm mb-2">{errors.courseType}</p>
        )}

        {/* Course */}
        <label className="block mb-2 font-medium" htmlFor="course">
          Select Your Course*
        </label>
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
          className={`w-full p-2 mb-4 border rounded ${
            errors.course ? "border-red-500" : "border-gray-300"
          }`}
          required
        >
          {courses.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.course && (
          <p className="text-red-600 text-sm mb-2">{errors.course}</p>
        )}

        {/* Message */}
        <label className="block mb-2 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className={`w-full p-2 mb-4 border rounded ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          rows={4}
          placeholder="250‑350 characters (optional)"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mb-2">{errors.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-red-900 text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default Enrollment;
