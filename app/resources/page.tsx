import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resources - CoastalWide LLC",
  description: "Flood insurance quoting, CRS resources, and FEMA guidance",
};

export default function ResourcesPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Resources</h1>
          <p className="text-xl text-blue-50">
            Tools and information to help your community succeed
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-[hsl(var(--ocean-blue))] hover:shadow-xl transition-shadow">
            <CardHeader className="bg-[hsl(var(--ocean-light))]">
              <CardTitle className="text-2xl text-[hsl(var(--ocean-blue))]">
                Flood Insurance Quoting
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                Get accurate flood insurance quotes for your property. Our tools help you understand coverage
                options and potential savings through the CRS program.
              </p>
              <Button className="w-full bg-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-teal))]">
                Request Quote
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-[hsl(var(--ocean-teal))] hover:shadow-xl transition-shadow">
            <CardHeader className="bg-[hsl(var(--ocean-light))]">
              <CardTitle className="text-2xl text-[hsl(var(--ocean-blue))]">CRS Resources</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6">
                Access comprehensive resources for implementing and improving your Community Rating System
                program, including guides, templates, and best practices.
              </p>
              <Button className="w-full bg-[hsl(var(--ocean-teal))] hover:bg-[hsl(var(--ocean-blue))]">
                View Resources
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="text-3xl text-[hsl(var(--ocean-blue))]">FEMA Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Stay up to date with the latest FEMA guidance documents, technical bulletins, and regulatory
              updates for floodplain management and the National Flood Insurance Program.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://www.fema.gov/floodplain-management"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[hsl(var(--ocean-teal))] hover:bg-gray-50 transition-all"
              >
                <FileText className="w-6 h-6 text-[hsl(var(--ocean-blue))] mr-3" />
                <span className="flex-1 text-gray-700">FEMA Floodplain Management</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://www.fema.gov/flood-insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[hsl(var(--ocean-teal))] hover:bg-gray-50 transition-all"
              >
                <FileText className="w-6 h-6 text-[hsl(var(--ocean-blue))] mr-3" />
                <span className="flex-1 text-gray-700">National Flood Insurance Program</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">CRS Coordinator's Manual</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive guide for communities implementing the Community Rating System
              </p>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Elevation Certificate Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Instructions for completing FEMA Elevation Certificates accurately
              </p>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-[hsl(var(--ocean-light))] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[hsl(var(--ocean-blue))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Floodplain Management Forms</h3>
              <p className="text-gray-600 text-sm mb-4">
                Templates and forms for floodplain development permits and reviews
              </p>
              <Button variant="outline" className="w-full" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[hsl(var(--ocean-blue))] to-[hsl(var(--ocean-teal))] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Additional Resources?</h2>
          <p className="text-xl text-blue-50 mb-8">
            Our team can provide custom resources and guidance tailored to your community's specific needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[hsl(var(--ocean-blue))] hover:bg-blue-50"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
