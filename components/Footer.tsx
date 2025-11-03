import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#212121', backgroundImage: 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Address</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[hsl(var(--ocean-teal))]" />
                <span className="text-sm">
                  1443 20th Street, Suite F<br />
                  Vero Beach, FL 32960, US
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-[hsl(var(--ocean-teal))]" />
                <a href="tel:772-532-4536" className="text-sm hover:text-white transition-colors">
                  772-532-4536
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-[hsl(var(--ocean-teal))]" />
                <a href="mailto:dennis@coastalwide.com" className="text-sm hover:text-white transition-colors break-all">
                  dennis@coastalwide.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-sm hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow us</h3>
            <div className="space-y-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors block"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">About us</h3>
            <p className="text-sm mb-4">
              CRS Consulting, Floodplain Management, and Education.
            </p>
            <Image
              src="/CW_Logo_White_PlusWhiteBG.svg"
              alt="CoastalWide LLC"
              width={180}
              height={36}
              className="h-9 w-auto"
            />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CoastalWide LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
