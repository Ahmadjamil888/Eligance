import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Silk Midi Dress',
    price: 485,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/products/silk-midi-dress',
    isNew: true
  },
  {
    id: 2,
    name: 'Cashmere Blazer',
    price: 720,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/products/cashmere-blazer',
    isNew: true
  },
  {
    id: 3,
    name: 'Pleated Midi Skirt',
    price: 320,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/products/pleated-midi-skirt',
    isNew: false
  },
  {
    id: 4,
    name: 'Wool Coat',
    price: 890,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    href: '/products/wool-coat',
    isNew: true
  }
];

const NewArrivals = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh from our atelier, discover the latest additions to our collection 
            of timeless pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="product-card group"
            >
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden bg-white rounded-sm">
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

        <div className="text-center mt-12">
          <Link href="/collections" className="luxury-button">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;