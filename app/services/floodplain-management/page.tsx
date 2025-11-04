import { Card, CardContent } from "@/components/ui/card";
import { MapPin, FileCheck, Waves, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Floodplain Management - CoastalWide LLC",
  description: "Comprehensive floodplain management services including elevation certificates, NFIP and CRS compliance",
};

export default function FloodplainManagementPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/image (3).png"
            alt="Floodplain landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[hsl(var(--ocean-blue))]/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MapPin className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Floodplain Management</h1>
          <p className="text-xl md:text-2xl text-blue-100">Comprehensive Compliance & Consulting Services</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
            Expert Floodplain Management Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team provides comprehensive floodplain management services to ensure your community's compliance with
            NFIP requirements while maximizing protection for residents and property. From elevation certificates to
            coastal construction oversight, we handle every aspect of floodplain management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Floodplain management services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
              Code Compliance Services
            </h3>
            <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FileCheck className="w-5 h-5 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                    <span>Review compliance with community's local ordinance</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="w-5 h-5 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                    <span>Review for compliance with Florida Building Code</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="w-5 h-5 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                    <span>Review site surveys verifying accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="w-5 h-5 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                    <span>Simple and complex plan reviews</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="w-5 h-5 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                    <span>Comprehensive site inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">Elevation Certificates</h3>
              <p className="text-gray-700 text-sm">
                Professional elevation certificate preparation and verification
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <ClipboardCheck className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">NFIP Compliance</h3>
              <p className="text-gray-700 text-sm">
                Ensure full compliance with National Flood Insurance Program requirements
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Waves className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">Coastal Construction</h3>
              <p className="text-gray-700 text-sm">
                Expert guidance on coastal construction control line requirements
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">Map Modifications</h3>
              <p className="text-gray-700 text-sm">
                Assistance with flood zone map amendments and revisions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 mb-16">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Flood Zone Modifications</h3>
              <p className="text-gray-700 mb-4">
                We assist with all types of flood zone map modifications to ensure accurate flood hazard determinations
                for properties in your community.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>Letters of Map Amendments (LOMA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>Letters of Map Revisions (LOMR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>Floodway Revisions</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>Conditional Letters of Map Revisions (CLOMR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>No Rise Certificates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                    <span>Physical Map Revisions (PMR)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
                Coastal Construction Control Line
              </h3>
              <p className="text-gray-700 mb-4">
                The CCCL program regulates structures and activities that can cause beach erosion, destabilize dunes,
                damage upland properties or interfere with public access.
              </p>
              <p className="text-gray-700">
                Our coastal experts will review the location of all planned structures in a beachshore project to
                ensure the design minimizes impacts on coastal resources while meeting regulatory requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
                Streamlined Permitting Process
              </h3>
              <p className="text-gray-700 mb-4">
                Save time and resources by streamlining your permitting process. We help develop efficient systems
                that ensure compliance while minimizing administrative burden.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Develop compliant permit application forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Create permit review process flow charts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Train staff on plan review checklists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Establish quality control procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-[hsl(var(--ocean-light))] to-blue-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
            Need Floodplain Management Assistance?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to help your community navigate the complexities of floodplain management
            and ensure full regulatory compliance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[hsl(var(--ocean-blue))] text-white px-8 py-3 rounded-md font-semibold hover:bg-[hsl(var(--ocean-teal))] transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
