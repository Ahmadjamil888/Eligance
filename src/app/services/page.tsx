import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Custom Couture',
    description: 'Experience the ultimate in personalized fashion with our custom couture service. From initial consultation to final fitting, we create one-of-a-kind pieces that reflect your unique style and personality.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Personal design consultation',
      'Custom measurements and fittings',
      'Premium fabric selection',
      'Hand-finished details',
      'Multiple fitting sessions',
      'Lifetime alterations'
    ],
    process: [
      'Initial consultation and design brief',
      'Sketch development and fabric selection',
      'Pattern creation and toile fitting',
      'Construction and hand-finishing',
      'Final fitting and delivery'
    ],
    price: 'Starting from $2,500',
    duration: '6-12 weeks'
  },
  {
    id: 2,
    title: 'Personal Styling',
    description: 'Transform your wardrobe and discover your signature style with our comprehensive personal styling service. Perfect for busy professionals and style-conscious individuals.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Style assessment and consultation',
      'Wardrobe audit and organization',
      'Personal shopping assistance',
      'Outfit coordination and styling',
      'Seasonal wardrobe updates',
      'Style guide creation'
    ],
    process: [
      'Style assessment questionnaire',
      'Wardrobe audit and analysis',
      'Shopping trip or online curation',
      'Styling session and photography',
      'Style guide delivery'
    ],
    price: 'Starting from $500',
    duration: '1-2 weeks'
  },
  {
    id: 3,
    title: 'Wardrobe Consulting',
    description: 'Complete wardrobe transformation service designed to optimize your closet, define your style, and create a cohesive wardrobe that works for your lifestyle.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Comprehensive closet organization',
      'Color analysis and palette creation',
      'Body shape analysis',
      'Capsule wardrobe planning',
      'Shopping list and budget planning',
      'Ongoing style support'
    ],
    process: [
      'Lifestyle and style assessment',
      'Closet audit and organization',
      'Color and body analysis',
      'Wardrobe plan creation',
      'Implementation and follow-up'
    ],
    price: 'Starting from $800',
    duration: '2-4 weeks'
  },
  {
    id: 4,
    title: 'Bridal Design',
    description: 'Create the wedding dress of your dreams with our specialized bridal design service. From classic elegance to modern sophistication, we bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Bridal consultation and design',
      'Custom dress creation',
      'Veil and accessory design',
      'Multiple fittings included',
      'Bridal party coordination',
      'Wedding day styling'
    ],
    process: [
      'Bridal consultation and vision board',
      'Design sketches and fabric selection',
      'Pattern creation and first fitting',
      'Construction and detail work',
      'Final fittings and delivery'
    ],
    price: 'Starting from $3,500',
    duration: '8-16 weeks'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion design services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Comprehensive fashion design services tailored to your unique style
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h2 className="font-serif text-4xl font-light mb-4">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium tracking-wide uppercase mb-3">What's Included</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium tracking-wide uppercase mb-3">Process</h3>
                      <ol className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-5 h-5 bg-gray-100 text-gray-600 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-100">
                    <div className="mb-4 sm:mb-0">
                      <p className="text-lg font-medium text-black">{service.price}</p>
                      <p className="text-sm text-gray-600">Timeline: {service.duration}</p>
                    </div>
                    <Link href="/contact" className="luxury-button-accent">
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-light mb-6">Ready to Begin Your Style Journey?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Book a complimentary consultation to discuss your style goals and discover how our services can transform your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="luxury-button-accent">
              Book Free Consultation
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