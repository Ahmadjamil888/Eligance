'use client';

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
          Style Insights
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive exclusive styling tips, fashion insights, and updates about our design services. 
          Join our community of style-conscious women who value personalized fashion.
        </p>

        {isSubscribed ? (
          <div className="bg-green-50 border border-green-200 rounded-sm p-6 max-w-md mx-auto">
            <p className="text-green-800 font-medium">
              Thank you for subscribing! Welcome to Élégance.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors text-sm"
              />
              <button
                type="submit"
                className="luxury-button whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        )}

        <div className="mt-12 pt-12 border-t border-gray-100">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-gray-200 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Free Consultation</h3>
              <p className="text-xs text-gray-600">Initial style assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-gray-200 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Bespoke Design</h3>
              <p className="text-xs text-gray-600">Custom made for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-gray-200 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Ongoing Support</h3>
              <p className="text-xs text-gray-600">Style guidance & care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;