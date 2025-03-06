import Link from "next/link"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-2xl w-full">
        <Link href="/" className="text-gray-500 mb-8 inline-block hover:text-gray-700">
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-light text-gray-600 mb-8 tracking-wide">About Lasse Pedersen</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">
            With over 15 years of experience in the industry, Lasse Pedersen has established himself as a premier
            hairstylist known for creating elegant, timeless looks tailored to each client's unique style and
            personality.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            After training at prestigious academies in Copenhagen and Paris, Lasse developed a distinctive approach that
            blends classic techniques with contemporary trends, resulting in sophisticated styles that enhance natural
            beauty.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Lasse's philosophy centers on understanding each client's lifestyle, preferences, and hair type to create
            personalized looks that are both beautiful and manageable. His attention to detail and commitment to
            excellence have earned him a loyal clientele and recognition in the industry.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            When not in the salon, Lasse continues to expand his expertise by attending international hair shows and
            workshops, ensuring his techniques remain at the cutting edge of the industry.
          </p>
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

