import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between items-center">
          <Link href="#" aria-label="Home">
            <Logo />
          </Link>
          <div className="flex items-center gap-x-6">
            <Button href="/register" color="blue">
              Get Started
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
