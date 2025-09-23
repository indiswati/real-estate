"use client"

import type React from "react"

import { useState } from "react"

interface BuyerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BuyerModal({ isOpen, onClose }: BuyerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    budget: "",
    message: "",
    termsAgree: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Buyer form submitted:", formData)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (!isOpen) return null

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.city &&
    formData.propertyType &&
    formData.budget &&
    formData.termsAgree

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ opacity: 1, transform: "none" }}
      >
        <form className="p-6 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Buyer Information</h3>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>
          </div>

          <div style={{ transform: "none" }}>
            <div className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
              <input
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ transform: "none" }}>
            <div className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <input
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              <input
                placeholder="+971 50 123 4567"
                pattern="^\+[0-9\s\-()]{7,}$"
                title="Phone number with country code, e.g. +971 50 123 4567"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300"
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
              </svg>
              <input
                placeholder="City"
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <select
              name="propertyType"
              className="w-full px-4 py-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="" className="text-gray-500">
                Type of Property
              </option>
              <option value="apartment" className="text-gray-800">
                Apartment
              </option>
              <option value="villa" className="text-gray-800">
                Villa
              </option>
              <option value="townhouse" className="text-gray-800">
                Townhouse
              </option>
              <option value="office" className="text-gray-800">
                Office / Commercial
              </option>
              <option value="land" className="text-gray-800">
                Land / Plot
              </option>
            </select>
          </div>

          <div>
            <select
              name="budget"
              className="w-full px-4 py-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              required
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" className="text-gray-500">
                Budget (AED)
              </option>
              <option value="60000" className="text-gray-800">
                60,000
              </option>
              <option value="100000" className="text-gray-800">
                100,000
              </option>
              <option value="250000" className="text-gray-800">
                250,000
              </option>
              <option value="500000" className="text-gray-800">
                500,000
              </option>
              <option value="750000" className="text-gray-800">
                750,000
              </option>
              <option value="1000000" className="text-gray-800">
                1,000,000
              </option>
              <option value="2000000" className="text-gray-800">
                2,000,000
              </option>
              <option value="3000000" className="text-gray-800">
                3,000,000
              </option>
              <option value="5000000" className="text-gray-800">
                5,000,000
              </option>
              <option value="10000000" className="text-gray-800">
                10,000,000
              </option>
            </select>
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows={3}
              name="message"
              className="w-full px-4 py-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="termsAgree"
              required
              className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              type="checkbox"
              name="termsAgree"
              checked={formData.termsAgree}
              onChange={handleChange}
            />
            <label htmlFor="termsAgree" className="text-gray-700">
              I agree to{" "}
              <a href="#terms" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold text-lg"
              tabIndex={0}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex-2 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed text-white"
              }`}
              tabIndex={0}
            >
              Submit Buyer Form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
