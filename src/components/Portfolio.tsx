import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: 'Evening Gown Collection',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke evening wear for red carpet events'
  },
  {
    id: 2,
    title: 'Executive Wardrobe',
    category: 'Personal Styling',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Professional styling for C-suite executives'
  },
  {
    id: 3,
    title: 'Bridal Couture',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dream wedding dress design and creation'
  },
  {
    id: 4,
    title: 'Capsule Wardrobe',
    category: 'Wardrobe Consulting',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Minimalist wardrobe transformation'
  },
  {
    id: 5,
    title: 'Luxury Outerwear',
    category: 'Custom Couture',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke coats and jackets for winter elegance'
  },
  {
    id: 6,
    title: 'Celebrity Styling',
    category: 'Personal Styling',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Red carpet and event styling services'
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of bespoke designs and styling transformations. 
            Each project reflects our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-white rounded-sm shadow-sm">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-medium tracking-wide uppercase text-gray-500 mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="luxury-button">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;