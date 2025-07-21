import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="relative">
      {/* Elegant top divider */}
      <div className="absolute inset-x-0 top-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800/60 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent translate-y-px" />
      </div>
      
      {/* Main footer with subtle depth */}
      <div className="bg-gradient-to-b from-black/95 via-gray-950/80 to-black/95 backdrop-blur-sm">
        <Container>
          <div className="py-20 sm:py-28 lg:py-32">
            <div className="relative flex flex-col items-center space-y-4">
              {/* Primary copyright */}
              <p className="text-center text-gray-400 text-sm font-light tracking-wide transition-colors duration-300 hover:text-gray-300">
                © 2025 Refineset. All rights reserved.
              </p>
              
              {/* Elegant separator */}
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
              
              {/* Refined tagline */}
              <p className="text-center text-gray-600 text-xs font-light tracking-[0.2em] uppercase opacity-80">
                Made with ❤️
              </p>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Bottom fade for seamless page end */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </footer>
  )
}
