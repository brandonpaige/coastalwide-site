"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--ocean-blue))] to-[hsl(var(--ocean-teal))] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-blue-50">
            Let's discuss your community's floodplain management and CRS objectives
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">Get in Touch</h2>
            <p className="text-gray-700 mb-8 text-lg">
              We're here to help your community improve storm resiliency, CRS class rating, and ensure NFIP
              compliance. Reach out to us by phone, email, or use the contact form.
            </p>

            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        1443 20th Street, Suite F<br />
                        Vero Beach, FL 32960, US
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Phone</h3>
                      <a
                        href="tel:772-532-4536"
                        className="text-[hsl(var(--ocean-blue))] hover:text-[hsl(var(--ocean-teal))] transition-colors"
                      >
                        772-532-4536
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                      <a
                        href="mailto:denise@coastalwide.com"
                        className="text-[hsl(var(--ocean-blue))] hover:text-[hsl(var(--ocean-teal))] transition-colors break-all"
                      >
                        denise@coastalwide.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 5:00 PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          <div>
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">
                        First name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">
                        Last name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      Your email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700">
                      Email subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      Your message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, consent: checked as boolean })
                      }
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-600 leading-tight cursor-pointer">
                      By checking this box and submitting your information, you are granting us permission to
                      email you. You may unsubscribe at any time.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-teal))]"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  );
}
