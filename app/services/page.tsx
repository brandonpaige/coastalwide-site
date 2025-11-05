import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services - CoastalWide LLC",
  description: "CRS Program Consultation, Floodplain Management, and Education services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/PSL-thumb-jpg.png"
            alt="Port St. Lucie waterfront"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(5, 61, 117, 0.44)' }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Services</h1>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/services/crs" className="group">
            <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[hsl(var(--ocean-teal))] cursor-pointer h-full">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--ocean-teal))] group-hover:scale-110">
                    <Shield className="w-12 h-12 text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-[hsl(var(--ocean-teal))]">
                  CRS Program Consultation
                </h2>
                <p className="text-gray-700 text-center mb-4">
                  Community Rating System<br />
                  Class Improvement<br />
                  CRS User Groups
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/services/floodplain-management" className="group">
            <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[hsl(var(--ocean-blue))] cursor-pointer h-full">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--ocean-blue))] group-hover:scale-110">
                    <MapPin className="w-12 h-12 text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-[hsl(var(--ocean-blue))]">
                  Floodplain Management
                </h2>
                <p className="text-gray-700 text-center mb-4">
                  Elevation Certificates, NFIP and CRS Compliance
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/services/education" className="group">
            <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[hsl(var(--ocean-teal))] cursor-pointer h-full">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[hsl(var(--ocean-teal))] group-hover:scale-110">
                    <GraduationCap className="w-12 h-12 text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))] transition-colors duration-300 group-hover:text-[hsl(var(--ocean-teal))]">Education</h2>
                <p className="text-gray-700 text-center mb-4">
                  Workshops<br />
                  Training
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
