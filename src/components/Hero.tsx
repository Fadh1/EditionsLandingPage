import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32 bg-black">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        Welcome to{' '}
        <span className="relative whitespace-nowrap text-blue-400">
          <span className="relative">Refineset</span>
        </span>{' '}
        Landing Page
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-300">
        Build amazing experiences with our platform. Get started today and see what you can create.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" color="blue">
          Get Started
        </Button>
        <Button href="#" variant="outline">
          Learn More
        </Button>
      </div>
    </Container>
  )
}