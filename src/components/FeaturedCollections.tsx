import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    title: 'Evening Wear',
    description: 'Sophisticated pieces for special occasions',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/evening-wear',
    color: 'bg-pink-200'
  },
  {
    id: 2,
    title: 'Business Attire',
    description: 'Professional elegance for the modern woman',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/business',
    color: 'bg-green-200'
  },
  {
    id: 3,
    title: 'Casual Luxury',
    description: 'Effortless style for everyday moments',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/casual',
    color: 'bg-purple-200'
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each collection tells a unique story, carefully curated to complement 
            your lifestyle and express your individual style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group block"
            >
              <div className="relative overflow-hidden bg-gray-50 rounded-sm">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className={`inline-block px-3 py-1 ${collection.color} text-black text-xs font-medium tracking-wide uppercase mb-3`}>
                    Collection
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;