import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

export const metadata = {
  title: "About Us - CoastalWide LLC",
  description: "Learn about CoastalWide's mission and expertise in CRS and floodplain management",
};

export default function AboutPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">About CoastalWide</h1>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">Owners and Operators</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Family-owned and operated, CoastalWide LLC was started in 2008...(place story here)
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            Add a description here.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Mrs-B-portrait-png copy.png"
                alt="President"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--ocean-blue))] mb-2">
                Denise Boehning, ANFI, CFM
              </h3>
              <p className="text-lg text-[hsl(var(--ocean-teal))] font-semibold mb-4">
               President/CRS Program Flood Specialist & Floodplain Administrator
              </p>
              <p className="text-gray-700 leading-relaxed">
               Denise has been working in the Floodplain Management Industry since 2008. She uses her experience as a former Compliance Officer for an International Wholesale Bank in NYC to help communities remain compliant with the NFIP and CRS programs. As a Certified Floodplain Manager, a licensed insurance agent and an Associate in the National Flood Insurance program, Denise can provide communities a unique perspective from the insurance and the floodplain management side.

When not working and taking care of her family, Denise is involved in her own community by serving on various boards and non-profit organizations.  
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Steve-SeriouseLegUp-RESIZE.png"
                alt="Principal Floodplain Manager"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--ocean-blue))] mb-2">
                Steve Boehning, P.E, CFM
              </h3>
              <p className="text-lg text-[hsl(var(--ocean-teal))] font-semibold mb-4">
                Principal Floodplain Manager
              </p>
              <p className="text-gray-700 leading-relaxed">
                Steve has been working as a Coastal Engineer for the past 25+ years. Steve is a known expert in coastal construction, permitting and coastal modeling. In addition to providing consulting services to CoastalWide, Steve is also managing his own coastal engineering company 'Coastal Waterways Design & Engineering'.

Steve volunteers as a Commissioner for the Florida Inland Navigation District and volunteers for his local parish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
