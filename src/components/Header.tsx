import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <Container>
        <nav className="relative flex justify-between items-center py-6 lg:py-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link 
              href="/" 
              aria-label="Refineset Home"
              className="group flex items-center transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              <Logo />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex items-center space-x-1">
            <Link
              href="/login"
              className="group relative px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 ease-out hover:text-white"
            >
              <span className="relative z-10">Sign in</span>
              <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-105" />
            </Link>
            
            <div className="w-px h-4 bg-white/20 mx-3" />
            
            <Button 
              href="/register" 
              variant="outline" 
              color="white"
              className="ml-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Get started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center space-x-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sign in
            </Link>
            <Button 
              href="/register" 
              variant="solid" 
              color="white"
              className="px-4 py-2 text-sm font-medium"
            >
              Get started
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
