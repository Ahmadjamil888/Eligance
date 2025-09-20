import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Élégance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-black mb-2 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto px-2">
            Let&apos;s discuss your style vision and create something beautiful together
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Ready to begin your style transformation? Contact Maryam directly to discuss your vision 
              and schedule your complimentary consultation.
            </p>
          </div>

          {/* Main Contact */}
          <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 rounded-sm mb-8 sm:mb-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium mb-3 sm:mb-4">Call Maryam</h3>
            <a 
              href="tel:+923218242415" 
              className="text-2xl sm:text-3xl font-light text-black hover:text-gray-600 transition-colors block mb-3 sm:mb-4"
            >
              +92 321 8242415
            </a>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Available Monday - Friday, 9AM - 6PM PKT</p>
            <a 
              href="tel:+923218242415" 
              className="luxury-button-accent inline-block w-full sm:w-auto"
            >
              Call Now
            </a>
          </div>


        </div>
      </section>


    </div>
  );
}