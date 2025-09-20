import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="font-serif text-xl sm:text-2xl font-semibold tracking-wide mb-3 sm:mb-4 block">
              Élégance
            </Link>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md mb-3 sm:mb-4">
              Creating bespoke fashion experiences for the discerning woman. From custom couture to personal styling, 
              we craft looks that define your unique elegance.
            </p>
            <div className="mb-4 sm:mb-6">
              <a href="tel:+923218242415" className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +92 321 8242415
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.372 0 12s5.374 12 12 12 12-5.372 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.175-2.293 3.522-.665.164-1.243.024-1.688-.622-.709 1.387-1.587 2.713-2.415 3.934-.829 1.221-1.728 2.205-2.764 2.769-.654.357-1.342.485-2.011.384-.669-.101-1.303-.446-1.837-1.02-.534-.574-.93-1.323-1.137-2.2-.207-.877-.225-1.808-.053-2.717.172-.909.517-1.764 1.005-2.463.488-.699 1.121-1.242 1.847-1.575.726-.333 1.543-.457 2.384-.359.841.098 1.69.35 2.461.731 1.541.761 2.632 2.269 3.501 4.024z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/services/couture" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Custom Couture</Link></li>
              <li><Link href="/services/styling" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Personal Styling</Link></li>
              <li><Link href="/services/consulting" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Wardrobe Consulting</Link></li>
              <li><Link href="/services/bridal" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Bridal Design</Link></li>
              <li><Link href="/contact" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">Client Care</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/contact" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link href="/process" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Design Process</Link></li>
              <li><Link href="/appointments" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Appointments</Link></li>
              <li><Link href="/care-guide" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Garment Care</Link></li>
              <li><Link href="/faq" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2024 Élégance. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0">
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;