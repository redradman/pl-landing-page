'use client';

export function Footer() {
  return (
    <footer className="bg-[#002D74] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#84A19C] flex items-center justify-center">
              <span className="text-white font-semibold text-sm">PL</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Providence Living</h3>
              <p className="text-white/70 text-sm">Transforming Senior Care in British Columbia</p>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="text-center text-white/60 text-sm">
          <p>© 2025 Providence Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
