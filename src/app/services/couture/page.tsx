import Image from 'next/image';
import Link from 'next/link';

export default function CustomCouture() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Custom Couture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            Custom Couture
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            One-of-a-kind pieces designed exclusively for you
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-light mb-6">Bespoke Excellence</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Our custom couture service represents the pinnacle of personalized fashion. Each piece is meticulously 
                crafted to your exact specifications, ensuring a perfect fit and unique design that reflects your 
                individual style and personality.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-3">What&apos;s Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Personal design consultation and concept development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Custom measurements and pattern creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Premium fabric selection and sourcing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Multiple fittings throughout construction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Hand-finished details and craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Lifetime alterations and care guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Custom couture process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Couture Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial concept to final creation, every step is carefully orchestrated to ensure perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                1
              </div>
              <h3 className="font-medium text-lg mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Initial meeting to discuss vision, lifestyle, and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                2
              </div>
              <h3 className="font-medium text-lg mb-2">Design</h3>
              <p className="text-sm text-gray-600">Sketch development, fabric selection, and design refinement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                3
              </div>
              <h3 className="font-medium text-lg mb-2">Pattern</h3>
              <p className="text-sm text-gray-600">Custom pattern creation and toile fitting</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                4
              </div>
              <h3 className="font-medium text-lg mb-2">Construction</h3>
              <p className="text-sm text-gray-600">Expert craftsmanship and hand-finishing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                5
              </div>
              <h3 className="font-medium text-lg mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Final fitting and delivery of your masterpiece</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-light mb-8">Investment</h2>
          <div className="bg-gray-50 p-8 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2">Evening Wear</h3>
                <p className="text-2xl font-light mb-2">From $2,500</p>
                <p className="text-sm text-gray-600">Cocktail dresses, gowns</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Bridal Couture</h3>
                <p className="text-2xl font-light mb-2">From $3,500</p>
                <p className="text-sm text-gray-600">Wedding dresses, special occasion</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Daywear</h3>
                <p className="text-2xl font-light mb-2">From $1,800</p>
                <p className="text-sm text-gray-600">Suits, separates, casual luxury</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Final pricing depends on design complexity, fabric selection, and finishing details
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-light mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Book your complimentary consultation to begin the journey of creating your perfect custom piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="luxury-button-accent">
              Book Consultation
            </Link>
            <a href="tel:+923218242415" className="luxury-button">
              Call +92 321 8242415
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}