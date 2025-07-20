import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import screenshotRefineset from '@/images/screenshots/ScreenshotRefineset.png'

export function Hero() {
  return (
    <div className="bg-black">
      <Container className="pb-16 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 items-center">
          <div className="text-left lg:pr-8">
            <h1 className="font-display text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build Progress One Iteration at a Time.
            </h1>
            <p className="mt-6 text-lg tracking-tight text-gray-300 max-w-lg">
              Refineset gives you a simple way to refine your work. Go from messy draft to better version—again and again.
            </p>
            <div className="mt-10 flex gap-x-6">
              <Button href="/register" color="blue">
                Start 14-Day Free Trial
              </Button>
              <Button href="#" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              <Image
                src={screenshotRefineset}
                alt="Refineset application interface showing project management features"
                className="w-full h-auto rounded-lg shadow-2xl"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}