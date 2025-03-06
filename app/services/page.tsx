import Link from "next/link"

export default function Services() {
  const services = [
    {
      name: "Precision Haircut",
      description:
        "A tailored cut that considers your face shape, hair texture, and personal style for a look that enhances your natural features.",
      price: "From $85",
    },
    {
      name: "Color Treatment",
      description:
        "Custom color services from subtle highlights to complete transformations, using premium products that maintain hair health.",
      price: "From $120",
    },
    {
      name: "Styling",
      description:
        "Expert styling for special occasions or everyday elegance, from sophisticated updos to effortless waves.",
      price: "From $65",
    },
    {
      name: "Hair Treatment",
      description:
        "Restorative treatments to repair damage, add shine, and improve overall hair health using luxury conditioning products.",
      price: "From $95",
    },
    {
      name: "Bridal Services",
      description:
        "Comprehensive bridal packages including trials, day-of styling, and options for the entire wedding party.",
      price: "Custom pricing",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-2xl w-full">
        <Link href="/" className="text-gray-500 mb-8 inline-block hover:text-gray-700">
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-light text-gray-600 mb-8 tracking-wide">Services</h1>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-light text-gray-700">{service.name}</h2>
                <span className="text-gray-600">{service.price}</span>
              </div>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="px-8 py-3 border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors duration-300 text-sm tracking-wider"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
    </main>
  )
}

