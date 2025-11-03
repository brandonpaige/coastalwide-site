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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
              <img
                src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="CRS and NFIP logos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
              What We Can Do for You
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900">CRS 5-year verification cycle visit</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                    <span>Develop a gap analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                    <span>Propose new activities and improve ongoing activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                    <span>Assist with recertification plan and submittal preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">4.</span>
                    <span>Assist preparing emergency plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">5.</span>
                    <span>Map and map open space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">6.</span>
                    <span>Create outreach projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">7.</span>
                    <span>Review and amend local flood ordinance for CRS compliance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900">Annual recertification</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                    <span>Maintain permit list and track Substantial Improvement/Substantial Damage properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                    <span>Assist communities in navigation potential non-compliant properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                    <span>Review and supplement flood outage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900">Community Outreach</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                    <span>Train community staff on the CRS Program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                    <span>Conduct presentations to the community to heighten flood awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                    <span>Establish a contact person for flood insurance questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">4.</span>
                    <span>Host community staff on reviewing a flood insurance map</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Floodplain Management Services
              </h3>

              <div className="space-y-6">
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Code Compliance</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Review compliance with community's local ordinance</li>
                      <li>Review for compliance with Florida Building Code</li>
                      <li>Review site surveys verifying accuracy</li>
                      <li>Review simple and complex plan reviews</li>
                      <li>Site inspections</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Flood Zone Modifications</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Letters of Map Amendments</li>
                      <li>Letters of Map Revisions</li>
                      <li>Floodway Revisions</li>
                      <li>Conditional Letters of Map Revisions</li>
                      <li>No Rise Certificates</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">
                      Coastal Construction Control Line
                    </h4>
                    <p className="text-gray-700">
                      The CCCL program regulates structures and activities that can cause beach erosion,
                      destabilize dunes, damage upland properties or interfere with public access. Our coastal
                      experts will review the location of all planned structures in a beachshore project to ensure
                      the design minimizes impacts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Permitting Process</h4>
                    <p className="text-gray-700">
                      Streamline your permitting process to save time and resources. We can help develop compliant
                      forms, create permit review process flow charts and train presenters on plan review check lists.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
