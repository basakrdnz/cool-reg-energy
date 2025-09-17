'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';

const baseClasses =
  'inline-block align-middle select-none outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

// Motion variants for floating animation
const floatingVariants = {
  initial: { y: 0 },
  animate: { 
    y: [-3, -6, -3],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  hover: { 
    y: -8,
    transition: { duration: 0.2 }
  },
  tap: { 
    y: 0,
    transition: { duration: 0.1 }
  }
};

// GlassSurface presets per variant (light / dark)
const surfacePreset = {
  light: {
    backgroundOpacity: 0.15,
    brightness: 55,
    opacity: 0.93,
    blur: 12,
    borderWidth: 0.06,
    saturation: 1.3,
    distortionScale: -120,
    redOffset: 0,
    greenOffset: 10,
    blueOffset: 20,
  },
  dark: {
    backgroundOpacity: 0.1,
    brightness: 35,
    opacity: 0.9,
    blur: 12,
    borderWidth: 0.06,
    saturation: 1.2,
    distortionScale: -120,
    redOffset: 0,
    greenOffset: 8,
    blueOffset: 16,
  },
};

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-3',
  lg: 'text-lg px-6 py-3.5',
};

export default function GlassButton({
  children,
  href,
  onClick,
  variant = 'light',
  size = 'md',
  className = '',
  as = 'button',
  ...rest
}) {
  const pad = sizes[size] || sizes.md;
  const preset = surfacePreset[variant] || surfacePreset.light;

  const content = (
    <motion.div
      variants={floatingVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={999}
        borderWidth={preset.borderWidth}
        brightness={preset.brightness}
        opacity={preset.opacity}
        blur={preset.blur}
        displace={0.2}
        backgroundOpacity={preset.backgroundOpacity}
        saturation={preset.saturation}
        distortionScale={preset.distortionScale}
        redOffset={preset.redOffset}
        greenOffset={preset.greenOffset}
        blueOffset={preset.blueOffset}
        className="rounded-full"
      >
        <span className={`text-white font-semibold ${pad} inline-flex items-center justify-center`}>{children}</span>
      </GlassSurface>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} {...rest}>
        {content}
      </Link>
    );
  }

  const Component = as || 'button';
  return (
    <Component onClick={onClick} className={`${baseClasses} ${className}`} {...rest}>
      {content}
    </Component>
  );
}


