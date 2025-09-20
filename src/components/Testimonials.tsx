import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, Tech Innovate',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: 'Maryam transformed my entire wardrobe. The custom pieces are not just beautiful, they make me feel confident and powerful in every boardroom.',
    service: 'Executive Wardrobe Consulting'
  },
  {
    id: 2,
    name: 'Isabella Rodriguez',
    role: 'Actress',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: 'The attention to detail in my custom gown was extraordinary. Maryam\'s craftsmanship is unmatched - I felt like a work of art walking down the red carpet.',
    service: 'Custom Couture'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: 'The personal styling service exceeded my expectations. They understood my aesthetic perfectly and created looks that truly represent who I am.',
    service: 'Personal Styling'
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="section-title">Client Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Hear from our clients about their transformative experiences with our 
            bespoke fashion design and styling services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-sm">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-base sm:text-lg">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="text-xs font-medium tracking-wide uppercase text-gray-500">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Ready to Transform Your Style?</h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Join our distinguished clientele and experience the difference of truly personalized fashion design. 
              Book your consultation today and begin your style transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="luxury-button-accent">
                Book Free Consultation
              </a>
              <a href="/contact" className="luxury-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;