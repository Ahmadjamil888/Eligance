import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About Élégance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            About Élégance
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Crafting timeless elegance through bespoke fashion design
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-light mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded with a passion for timeless elegance and exceptional craftsmanship, Élégance has been creating 
                  bespoke fashion experiences for discerning women who value quality, sophistication, and personal style.
                </p>
                <p>
                  Our journey began with a simple belief: every woman deserves to feel confident and beautiful in clothes 
                  that are uniquely hers. This philosophy drives everything we do, from our initial consultations to the 
                  final stitch of each custom piece.
                </p>
                <p>
                  With years of experience in haute couture and personal styling, we combine traditional craftsmanship 
                  with contemporary design sensibilities to create pieces that are both timeless and modern.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fashion design process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Every piece is meticulously crafted with attention to detail and the finest materials, 
                ensuring exceptional quality that lasts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Personalization</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in creating pieces that reflect your unique personality and style, 
                tailored specifically to your preferences and lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering exceptional service and results that exceed expectations, 
                from consultation to final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the Designer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The creative vision and expertise behind every Élégance design.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm mx-auto max-w-md">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Maryam - Designer & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-3xl font-medium mb-4">Maryam</h3>
                <p className="text-lg text-gray-600 mb-6">Designer & CEO</p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    With 7 years of dedicated experience in fashion design and styling, Maryam founded Élégance 
                    with a vision to create truly personalized fashion experiences for discerning women.
                  </p>
                  <p>
                    Her expertise spans custom couture, personal styling, and wardrobe consulting. Maryam's 
                    approach combines traditional craftsmanship with contemporary design sensibilities, 
                    ensuring each piece is both timeless and uniquely personal.
                  </p>
                  <p>
                    Passionate about empowering women through fashion, Maryam works closely with each client 
                    to understand their lifestyle, preferences, and aspirations, creating pieces that enhance 
                    their confidence and express their individual style.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-6 text-center lg:text-left">
                    <div>
                      <p className="text-2xl font-light text-black">7+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-2xl font-light text-black">100+</p>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-light mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Ready to experience the Élégance difference? Book your complimentary consultation and begin your style transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="luxury-button-accent">
              Book Consultation
            </Link>
            <Link href="/contact" className="luxury-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}