import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Custom Couture',
    description: 'One-of-a-kind pieces designed exclusively for you, from concept to creation.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Personal consultation', 'Custom measurements', 'Premium fabrics', 'Multiple fittings'],
    price: 'Starting from $2,500',
    color: 'bg-pink-200'
  },
  {
    id: 2,
    title: 'Personal Styling',
    description: 'Transform your wardrobe with expert styling guidance and curated looks.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Style assessment', 'Wardrobe audit', 'Shopping assistance', 'Seasonal updates'],
    price: 'Starting from $500',
    color: 'bg-green-200'
  },
  {
    id: 3,
    title: 'Wardrobe Consulting',
    description: 'Complete wardrobe transformation and organization for your lifestyle.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Closet organization', 'Color analysis', 'Style guide creation', 'Ongoing support'],
    price: 'Starting from $800',
    color: 'bg-purple-200'
  }
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            We offer comprehensive fashion design services tailored to your unique style and needs. 
            Each service is crafted to enhance your personal aesthetic and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative overflow-hidden bg-gray-50 rounded-sm mb-6">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="absolute top-6 left-6">
                  <div className={`inline-block px-3 py-1 ${service.color} text-black text-xs font-medium tracking-wide uppercase`}>
                    Service
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <p className="text-base sm:text-lg font-medium text-black">
                    {service.price}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium tracking-wide uppercase mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact" className="luxury-button w-full text-center block">
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;