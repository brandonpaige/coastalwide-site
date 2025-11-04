import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Presentation, Award, Target } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Education & Training - CoastalWide LLC",
  description: "Professional workshops and training programs for floodplain management and CRS education",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="/doral-class-jpg.png"
            alt="Education and training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0070d7] opacity-33"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Education & Training</h1>
          <p className="text-xl md:text-2xl text-blue-100">Professional Development for Community Excellence</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
            Comprehensive Training Programs
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide specialized training and educational workshops designed to equip community staff, officials,
            and stakeholders with the knowledge and skills needed for effective floodplain management and CRS program
            participation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">
                CRS Program Training
              </h3>
              <p className="text-gray-700 text-center">
                Comprehensive training for community staff on navigating the Community Rating System, understanding
                requirements, and maximizing credit opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">
                Floodplain Management
              </h3>
              <p className="text-gray-700 text-center">
                Expert instruction on NFIP requirements, local ordinance compliance, permit review processes, and
                best practices in floodplain administration.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Presentation className="w-10 h-10 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-[hsl(var(--ocean-blue))]">
                Community Presentations
              </h3>
              <p className="text-gray-700 text-center">
                Engaging presentations designed to heighten flood awareness among residents, business owners, and
                community stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[hsl(var(--ocean-blue))]">
              Workshop Topics
            </h3>
            <div className="space-y-4">
              <Card className="border-l-4 border-[hsl(var(--ocean-teal))]">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Understanding Flood Insurance</h4>
                  <p className="text-gray-700">
                    Learn about NFIP policies, coverage options, rating procedures, and how to help residents make
                    informed decisions about flood insurance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[hsl(var(--ocean-teal))]">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Reading Flood Insurance Rate Maps</h4>
                  <p className="text-gray-700">
                    Master the skills needed to interpret FIRMs, understand flood zones, base flood elevations, and
                    provide accurate flood hazard information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[hsl(var(--ocean-teal))]">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Substantial Improvement & Damage</h4>
                  <p className="text-gray-700">
                    Understand requirements for determining substantial improvement and substantial damage, including
                    documentation and enforcement procedures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[hsl(var(--ocean-teal))]">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">Building Code Compliance</h4>
                  <p className="text-gray-700">
                    Training on flood-resistant construction requirements, plan review procedures, and inspection
                    protocols for new construction and improvements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-6">
              <img
                src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Education and training workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">Customized Training</h4>
                <p className="text-gray-700">
                  All training programs can be customized to meet your community's specific needs, experience level,
                  and objectives. We offer both in-person and virtual training options to accommodate your schedule
                  and preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--ocean-blue))]">
            Training Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Improved Compliance</h4>
              <p className="text-gray-700">
                Better understanding of requirements leads to improved regulatory compliance and reduced risk of
                violations or sanctions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Enhanced Expertise</h4>
              <p className="text-gray-700">
                Build internal capacity and expertise, reducing reliance on external consultants for routine matters
                and improving efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[hsl(var(--ocean-light))] rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[hsl(var(--ocean-blue))]" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Community Education</h4>
              <p className="text-gray-700">
                Equip staff to educate residents about flood risks and protection measures, earning valuable CRS
                outreach credits.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
                Specialized Training Services
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>On-site staff training sessions tailored to your community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>Regional workshops bringing multiple communities together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>Webinar series for convenient remote learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>Annual training programs for ongoing professional development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>Conference presentations and panel discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--ocean-teal))] mr-2 font-bold text-xl">•</span>
                  <span>Development of training materials and resources</span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="border-2 border-[hsl(var(--ocean-blue))] shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-[hsl(var(--ocean-blue))]">
                    CRS Outreach Credit
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Many of our education programs can earn valuable CRS credit under Activity 330 (Outreach Projects).
                    We can help design and document training programs to maximize your CRS points.
                  </p>
                  <p className="text-gray-700">
                    Our training sessions can also support credit under Activity 340 (Hazard Disclosure) and Activity
                    350 (Flood Protection Information) by ensuring your staff has the knowledge to provide accurate
                    flood hazard information to the public.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[hsl(var(--ocean-light))] to-blue-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--ocean-blue))]">
            Ready to Enhance Your Team's Expertise?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Invest in professional development that will strengthen your community's floodplain management program
            and improve services to residents.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[hsl(var(--ocean-blue))] text-white px-8 py-3 rounded-md font-semibold hover:bg-[hsl(var(--ocean-teal))] transition-colors shadow-lg"
          >
            Schedule Training Today
          </Link>
        </div>
      </section>
    </div>
  );
}
