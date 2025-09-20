import Image from 'next/image';

const portfolioCategories = ['All', 'Custom Couture', 'Personal Styling', 'Wardrobe Consulting', 'Bridal Design'];

const portfolioItems = [
  {
    id: 1,
    title: 'Red Carpet Elegance',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke evening gown for film premiere',
    client: 'Celebrity Client',
    year: '2024'
  },
  {
    id: 2,
    title: 'Executive Power Dressing',
    category: 'Personal Styling',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete wardrobe transformation for C-suite executive',
    client: 'Tech CEO',
    year: '2024'
  },
  {
    id: 3,
    title: 'Timeless Wedding Gown',
    category: 'Bridal Design',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Classic silk wedding dress with hand-beaded details',
    client: 'Private Client',
    year: '2024'
  },
  {
    id: 4,
    title: 'Minimalist Capsule',
    category: 'Wardrobe Consulting',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '30-piece capsule wardrobe for busy professional',
    client: 'Art Director',
    year: '2024'
  },
  {
    id: 5,
    title: 'Luxury Outerwear Collection',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke coat collection for winter elegance',
    client: 'Fashion Influencer',
    year: '2023'
  },
  {
    id: 6,
    title: 'Award Season Styling',
    category: 'Personal Styling',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete styling for awards season appearances',
    client: 'Actress',
    year: '2023'
  },
  {
    id: 7,
    title: 'Bohemian Wedding Suite',
    category: 'Bridal Design',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Flowing wedding dress with intricate lacework',
    client: 'Destination Bride',
    year: '2023'
  },
  {
    id: 8,
    title: 'Professional Wardrobe Overhaul',
    category: 'Wardrobe Consulting',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete professional wardrobe transformation',
    client: 'Law Firm Partner',
    year: '2023'
  },
  {
    id: 9,
    title: 'Avant-Garde Evening Wear',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sculptural evening gown for gallery opening',
    client: 'Art Collector',
    year: '2023'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion portfolio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            A showcase of our bespoke designs and styling transformations
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium tracking-wide uppercase border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-50 rounded-sm shadow-sm">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 text-black px-2 py-1 text-xs font-medium tracking-wide uppercase">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center text-xs">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Design Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project begins with understanding your vision and ends with a creation that exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                1
              </div>
              <h3 className="font-medium text-lg mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Understanding your vision, lifestyle, and style preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                2
              </div>
              <h3 className="font-medium text-lg mb-2">Design</h3>
              <p className="text-sm text-gray-600">Creating sketches, selecting fabrics, and developing concepts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                3
              </div>
              <h3 className="font-medium text-lg mb-2">Creation</h3>
              <p className="text-sm text-gray-600">Expert craftsmanship and attention to every detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-serif">
                4
              </div>
              <h3 className="font-medium text-lg mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Final fitting and delivery of your perfect piece</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-light mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Let&apos;s discuss your vision and create a piece that&apos;s uniquely yours. Book your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="luxury-button-accent">
              Book Consultation
            </a>
            <a href="/contact" className="luxury-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}