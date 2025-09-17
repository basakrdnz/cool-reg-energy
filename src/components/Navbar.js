'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlassSurface from './GlassSurface';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className="fixed top-4 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
        {/* Content wrapped inside GlassSurface */}
        <GlassSurface
          width="100%"
          height={60}
          borderRadius={32}
          borderWidth={0.06}
          brightness={35}
          opacity={0.9}
          blur={12}
          displace={0.2}
          backgroundOpacity={0.1}
          saturation={1.2}
          distortionScale={-120}
          redOffset={0}
          greenOffset={8}
          blueOffset={16}
          mixBlendMode="normal"
          className="w-full rounded-xl"
        >
        <div className="container flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              CoolReg
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="liquid-button text-foreground hover:text-primary px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 relative"
              >
                <span className="relative z-10">Anasayfa</span>
              </Link>
              <Link
                href="/products"
                className="liquid-button text-foreground hover:text-primary px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 relative"
              >
                <span className="relative z-10">Ürünlerimiz</span>
              </Link>
              <Link
                href="/contact"
                className="liquid-button text-foreground hover:text-primary px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 relative"
              >
                <span className="relative z-10">İletişim</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="liquid-button text-foreground hover:text-primary p-2 rounded-lg transition-colors duration-300 relative"
            >
              <svg className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        </GlassSurface>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-2">
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={12}
                  borderWidth={0.06}
                  brightness={35}
                  opacity={0.9}
                  blur={12}
                  displace={0.2}
                  backgroundOpacity={0.1}
                  saturation={1.2}
                  distortionScale={-120}
                  redOffset={0}
                  greenOffset={8}
                  blueOffset={16}
                  mixBlendMode="normal"
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-xl"
                >
              <Link
                href="/"
                className="liquid-button text-foreground hover:text-primary block px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Anasayfa</span>
              </Link>
              <Link
                href="/products"
                className="liquid-button text-foreground hover:text-primary block px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Ürünlerimiz</span>
              </Link>
                  <Link
                    href="/contact"
                    className="liquid-button text-foreground hover:text-primary block px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-300 relative"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">İletişim</span>
                  </Link>
                </GlassSurface>
              </div>
            )}
        </div>
    </nav>
 );
}
