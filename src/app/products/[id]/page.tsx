'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        'Model is 5\'9" wearing size S'
      ]
    }
  };
  
  return products[id as keyof typeof products] || null;
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li>/</li>
            <li><Link href="/collections" className="hover:text-black">Collections</Link></li>
            <li>/</li>
            <li className="text-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative overflow-hidden bg-gray-50 rounded-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden bg-gray-50 rounded-sm border-2 ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl font-light tracking-wide mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-gray-900 mb-6">
                ${product.price}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium tracking-wide uppercase border transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm font-medium tracking-wide uppercase border transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button className="w-full luxury-button-accent py-4">
                Add to Cart - ${product.price * quantity}
              </button>
              <button className="w-full luxury-button py-4">
                Add to Wishlist
              </button>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase mb-4">Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {product.details.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}