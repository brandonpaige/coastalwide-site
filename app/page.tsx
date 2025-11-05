import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  MapPin,
  Waves,
  GraduationCap,
  FileText,
  Users,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url("/hero.png")`,
    }}
  />

  <div
  className="absolute inset-0"
  style={{ backgroundColor: 'rgba(5, 61, 117, 0.65)' }}
/>

  <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
      CoastalWide LLC
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 mb-8 drop-shadow font-light">
      Expert Floodplain Management and CRS Solutions
    </p>

    <Button asChild size="lg" className="bg-white text-[hsl(var(--ocean-blue))] hover:bg-blue-50">
      <Link href="/services">
        Our Services <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </Button>
  </div>

  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1440 120" className="w-full h-auto">
      <path
        fill="#ffffff"
        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      />
    </svg>
  </div>
</section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
              CoastalWide LLC
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Over the past 10+ years we have served our communities nationwide with their floodplain management
              and CRS programs. We have the staff and expertise to provide your community with the know-how to
              advance storm resiliency, improve CRS class rating and ensure NFIP compliance. Call, text or email us
              to discuss your community's floodplain management and CRS objectives.
            </p>
            <blockquote className="border-l-4 border-[hsl(var(--ocean-blue))] pl-4 my-6 italic text-gray-600">
              <p className="text-lg mb-2">
                "Though flood waters threaten, they will never reach them"
              </p>
              <cite className="text-base not-italic">— Psalm 32:6</cite>
            </blockquote>
            <Button asChild size="lg" className="bg-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-teal))]">
              <Link href="/about">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ocean-blue))] to-[hsl(var(--ocean-teal))] opacity-20" />
            <img
              src="/luiz-cent-xFSk-1py60Y-unsplash.jpg"
              alt="Coastal community aerial view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--ocean-blue))] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0">
            <path
              fill="currentColor"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact CoastalWide Today</h2>
            <p className="text-xl text-blue-100">
              CRS Consulting, Floodplain and Building Code Plan Reviews, Education
            </p>
          </div>
          <div className="text-center">
            <a
              href="tel:772-532-4536"
              className="text-2xl font-bold hover:text-blue-200 transition-colors inline-block"
            >
              (772) 532-4536
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-100 hover:border-[hsl(var(--ocean-teal))] hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">CRS</h3>
              <p className="text-gray-700 text-center mb-4">
                FEMA Community Rating System Program expertise to improve coastal resiliency and flood risk awareness.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[hsl(var(--ocean-teal))] hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">
                Floodplain Management
              </h3>
              <p className="text-gray-700 text-center mb-4">
                Certified floodplain and building code plan reviewers and inspections.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[hsl(var(--ocean-teal))] hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">Education</h3>
              <p className="text-gray-700 text-center mb-4">
                Instructors with real world experience to educate regulatory staff, realtors, lenders and insurance agents.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Resources</h3>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2">•</span>
                    <span>Flood Insurance Quoting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2">•</span>
                    <span>CRS Resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2">•</span>
                    <span>FEMA Guidance</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-teal))]">
                  <Link href="/resources">View Resources</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Education and training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-[hsl(var(--ocean-blue))] to-[hsl(var(--ocean-teal))] text-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">CRS Insider Tips</h2>
            <p className="text-blue-50 mb-6 text-lg">
              Sign up to our newsletter and get all the inside information on CRS!
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-[hsl(var(--ocean-blue))] hover:bg-blue-50 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-100 mt-4">
                By submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
