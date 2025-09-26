"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    subject: "",
    message: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented after going live
    console.log("Contact form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const countryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+65", country: "Singapore" },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent animate-fade-in">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 mb-16 font-body max-w-3xl mx-auto leading-relaxed">
              Ready to start your real estate journey in Dubai? Contact our expert team for personalized guidance and
              support.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Email Address</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">info@openprojects.ae</p>
                  <p className="text-gray-600 italic text-lg leading-relaxed">support@openprojects.ae</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">+971 4 XXX XXXX</p>
                  <p className="text-gray-600 italic text-lg leading-relaxed">+971 50 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Office Address</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    Business Bay, Dubai
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Phone Field with Country Code */}
                <div>
                  <Label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <div className="flex mt-1">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange("countryCode", e.target.value)}
                      className="w-32 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </option>
                      ))}
                    </select>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="ml-2 flex-1"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="contact-subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </Label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="buying">Property Buying</option>
                    <option value="selling">Property Selling</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="contact-message" className="text-sm font-medium text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    placeholder="Tell us about your requirements or questions..."
                    rows={5}
                    required
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    id="termsAgree"
                    required
                    className="w-4 h-4 mt-1 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                    type="checkbox"
                    name="termsAgree"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                  />
                  <label htmlFor="termsAgree" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <a href="#terms-conditions" className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    . I consent to being contacted by Open Projects Dubai regarding my inquiry.*
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200"
                  disabled={!formData.agreeToTerms}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
