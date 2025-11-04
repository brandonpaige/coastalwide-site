import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "CRS Program Consultation - CoastalWide LLC",
  description: "Community Rating System consultation services for class improvement and compliance",
};

export default function CRSPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/image (4).png"
            alt="Community aerial view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#053d75] opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">CRS Program Consultation</h1>
          <p className="text-xl md:text-2xl text-blue-100">Community Rating System Excellence</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
            What is the Community Rating System?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Community Rating System (CRS) is a voluntary incentive program that recognizes and encourages
            community floodplain management practices that exceed the minimum National Flood Insurance Program (NFIP)
            standards. Communities that participate in the CRS receive reduced flood insurance premiums for their residents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Class Improvement</h3>
              <p className="text-gray-700">
                We help communities improve their CRS class rating, resulting in greater flood insurance premium
                discounts for policyholders.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Expert Guidance</h3>
              <p className="text-gray-700">
                Our team provides comprehensive support through the verification cycle and annual recertification
                processes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
            <CardContent className="pt-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">CRS User Groups</h3>
              <p className="text-gray-700">
                Connect with other communities to share best practices and stay informed about CRS program updates
                and opportunities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
              CRS 5-Year Verification Cycle
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Gap Analysis</h4>
                  <p className="text-gray-700">Develop a comprehensive gap analysis to identify improvement opportunities</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Activity Enhancement</h4>
                  <p className="text-gray-700">Propose new activities and improve ongoing activities for maximum credit</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Recertification Support</h4>
                  <p className="text-gray-700">Assist with recertification plan and submittal preparation</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Emergency Planning</h4>
                  <p className="text-gray-700">Assist preparing emergency plans that meet CRS requirements</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Open Space Mapping</h4>
                  <p className="text-gray-700">Map and document open space for preservation credit</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Outreach Projects</h4>
                  <p className="text-gray-700">Create effective outreach projects to educate the community</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[hsl(var(--ocean-teal))] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Ordinance Review</h4>
                  <p className="text-gray-700">Review and amend local flood ordinance for CRS compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Annual Recertification</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Maintain permit list and track Substantial Improvement/Substantial Damage properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Assist communities in navigating potential non-compliant properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Review and supplement flood outreach materials</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">Community Outreach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Train community staff on the CRS Program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Conduct presentations to the community to heighten flood awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Establish a contact person for flood insurance questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">•</span>
                  <span>Host community staff training on reviewing flood insurance maps</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-[hsl(var(--ocean-light))] to-blue-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
            Ready to Improve Your CRS Rating?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Let us help your community achieve a better CRS class rating and provide greater savings to your residents.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[hsl(var(--ocean-blue))] text-white px-8 py-3 rounded-md font-semibold hover:bg-[hsl(var(--ocean-teal))] transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
