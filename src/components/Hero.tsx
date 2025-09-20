import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant fashion model"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-black mb-4 sm:mb-6 animate-fade-in">
          Bespoke
          <span className="block font-medium">Fashion Design</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up px-2">
          Elevate your style with our personalized fashion design services. 
          From custom couture to wardrobe consulting, we create looks that define you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link href="/contact" className="luxury-button w-full sm:w-auto text-center">
            Book Consultation
          </Link>
          <Link href="/services" className="luxury-button-accent w-full sm:w-auto text-center">
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;