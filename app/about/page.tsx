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

        <div className="max-w-5xl mx-auto space-y-12 mb-16">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="President"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--ocean-blue))] mb-2">
                Title (e.g., John Doe)
              </h3>
              <p className="text-lg text-[hsl(var(--ocean-teal))] font-semibold mb-4">
                President
              </p>
              <p className="text-gray-700 leading-relaxed">
                Add biography and professional background here. This section should describe the President's experience,
                expertise, and role within CoastalWide LLC. Include relevant qualifications, years of experience, and
                specific contributions to the company and the floodplain management field.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Principal Floodplain Manager"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[hsl(var(--ocean-blue))] mb-2">
                Title (e.g., Jane Smith)
              </h3>
              <p className="text-lg text-[hsl(var(--ocean-teal))] font-semibold mb-4">
                Principal Floodplain Manager
              </p>
              <p className="text-gray-700 leading-relaxed">
                Add biography and professional background here. This section should describe the Principal Floodplain
                Manager's credentials, certifications, and expertise in floodplain management and CRS programs. Include
                years of experience, specialized skills, and notable achievements in the field.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Over the past 107 years we have served our communities nationwide with their floodplain management
              and CRS programs. We have the staff and expertise to provide your community with the know-how to
              advance storm resiliency, improve CRS class rating and ensure NFIP compliance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Call, text or email us to discuss your community's floodplain management and CRS objectives.
              Our experienced team is ready to help your community reduce flood insurance premiums, increase
              community resilience, and put money back into your community.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Coastal landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-100 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">Expertise</h3>
              <p className="text-gray-700 text-center">
                Over 107 years of combined experience serving communities nationwide with CRS programs and
                floodplain management.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">Certified</h3>
              <p className="text-gray-700 text-center">
                Our team includes certified floodplain managers, building code officials, and CRS specialists.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">
                Results-Driven
              </h3>
              <p className="text-gray-700 text-center">
                Proven track record of helping communities improve their CRS class ratings and reduce flood
                insurance premiums.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
            What is the Community Rating System?
          </h2>
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8 text-left">
              <p className="text-lg text-gray-700 mb-4">
                Did you know that flooding impacts more individuals in the United States than any other hazard? Many
                community residents rely on flood insurance to address the risks posed by flooding. To reduce the
                rating costs of flood insurance, FEMA created the Community Rating System (CRS) program, a voluntary
                incentive program that recognizes and encourages community floodplain management practices that exceed
                the minimum requirements of the National Flood Insurance Program (NFIP).
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The CRS was implemented to achieve three goals:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                  <span>Reduce and avoid flood damage to insurable property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                  <span>Strengthen and support the insurance aspects of the National Flood Insurance Program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                  <span>Foster comprehensive floodplain management</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                A community that meets none or all of these goals will achieve:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                  <span>A class designation that provides a flood insurance discount on all flood policies in increments of 5% depending on the class</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                  <span>A community that implements higher standards will become a more resilient community and bounce back from storms much weaker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                  <span>A CRS community will be a safer community</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                CRS classifications are based on 19 creditable activities, organized in four categories:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">1.</span>
                  <span>Public Information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">2.</span>
                  <span>Mapping and Regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">3.</span>
                  <span>Flood Damage Reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold">4.</span>
                  <span>Warning and Response</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-xl text-gray-700 mt-8 font-semibold">
            Let us help you improve your CRS program, so you too can become a more resilient community, reduce flood
            insurance premiums and put money back into your community.
          </p>
        </div>
      </section>
    </div>
  );
}
