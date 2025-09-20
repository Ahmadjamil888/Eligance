import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Silk Evening Gown',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Evening Wear',
    isNew: true
  },
  {
    id: 2,
    name: 'Tailored Blazer',
    price: 680,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    isNew: false
  },
  {
    id: 3,
    name: 'Cashmere Sweater',
    price: 420,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Casual',
    isNew: false
  },
  {
    id: 4,
    name: 'Pleated Midi Dress',
    price: 540,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Dresses',
    isNew: true
  },
  {
    id: 5,
    name: 'Wool Trench Coat',
    price: 890,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Outerwear',
    isNew: false
  },
  {
    id: 6,
    name: 'Silk Blouse',
    price: 320,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Tops',
    isNew: true
  },
  {
    id: 7,
    name: 'High-Waist Trousers',
    price: 380,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Bottoms',
    isNew: false
  },
  {
    id: 8,
    name: 'Leather Handbag',
    price: 750,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    isNew: true
  }
];

const categories = ['All', 'Evening Wear', 'Business', 'Casual', 'Dresses', 'Outerwear', 'Tops', 'Bottoms', 'Accessories'];

export default function Collections() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            Collections
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Discover our complete range of luxury fashion pieces
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group"
              >
                <div className="relative">
                  <div className="aspect-[3/4] relative overflow-hidden bg-gray-50 rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="product-image"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium tracking-wide uppercase">
                        New
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 text-xs font-medium tracking-wide uppercase">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <h3 className="font-medium text-lg mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-900 font-light">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}