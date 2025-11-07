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
    phone: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (formData.honeypot) {
      setIsSubmitting(false);
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.consent) {
      setSubmitStatus({ type: 'error', message: 'Please provide consent to contact you.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
          honeypot: "",
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-64 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/christopher-ryan-U_Vy8jT2BhE-unsplash-RESIZE.jpg')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(5, 61, 117, 0.44)',
          }}
        />
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
                        href="mailto:dennis@coastalwide.com"
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
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

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

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-teal))] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
