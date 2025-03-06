import Link from "next/link"
import { ArrowLeft, Mail, Instagram, Phone } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navigation />

      {/* Back button */}
      <div className="fixed top-6 left-6 z-40 mix-blend-difference">
        <Link href="/" className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} />
          <span className="text-sm tracking-wider">BACK</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide mb-8">Contact</h1>

          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              For bookings, collaborations, or inquiries, please get in touch using the contact information below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <a href="mailto:info@lassepedersen.biz" className="text-gray-800 hover:text-gray-600 transition-colors">
                  info@lassepedersen.biz
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <a href="tel:+4512345678" className="text-gray-800 hover:text-gray-600 transition-colors">
                  +45 12 34 56 78
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram size={20} className="text-gray-400" />
                <a
                  href="https://instagram.com/lassepedersen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  @lassepedersen
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-light text-gray-800 mb-4">Representation</h2>
              <p className="text-gray-600">
                Agency Name
                <br />
                <a href="mailto:agency@example.com" className="text-gray-800 hover:text-gray-600 transition-colors">
                  agency@example.com
                </a>
                <br />
                <a href="tel:+4587654321" className="text-gray-800 hover:text-gray-600 transition-colors">
                  +45 87 65 43 21
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Lasse Pedersen. All rights reserved.</p>
      </footer>
    </main>
  )
}

