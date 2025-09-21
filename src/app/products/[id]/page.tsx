import Image from 'next/image';
import Link from 'next/link';
import ProductClient from './ProductClient';

// Mock product data - in a real app, this would come from an API
const getProduct = (id: string) => {
  const products = {
    '1': {
      id: '1',
      name: 'Silk Evening Gown',
      price: 1250,
      description: 'An exquisite silk evening gown that embodies timeless elegance. Crafted from the finest mulberry silk, this piece features a flowing silhouette that gracefully drapes the body. Perfect for special occasions and formal events.',
      images: [
        'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Burgundy'],
      details: [
        '100% Mulberry Silk',
        'Dry clean only',
        'Made in Italy',
        'Model is 5&apos;9&quot; wearing size S'
      ]
    }
  };
  
  return products[id as keyof typeof products] || null;
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link href="/collections" className="luxury-button">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  return <ProductClient product={product} />;
}