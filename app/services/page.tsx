import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Our Services - CoastalWide LLC",
  description: "CRS Program Consultation, Floodplain Management, and Education services",
};

export default function ServicesPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Services</h1>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))]">
                CRS Program Consultation
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Community Rating System<br />
                Class Improvement<br />
                CRS User Groups
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))]">
                Floodplain Management
              </h2>
              <p className="text-gray-700 text-center mb-4">
                Elevation Certificates, NFIP and CRS Compliance
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-[hsl(var(--ocean-blue))]">Education</h2>
              <p className="text-gray-700 text-center mb-4">
                Workshops<br />
                Training
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
