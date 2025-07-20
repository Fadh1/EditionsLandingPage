import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import appScreenshot from '@/images/screenshots/SS1.png'

export function Hero() {
  return (
    <div className="bg-black">
      <Container className="pb-16 pt-20 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build Progress One Iteration at a Time.
            </h1>
            <p className="mt-6 text-lg tracking-tight text-gray-300 max-w-2xl mx-auto">
              Refineset gives you a simple way to refine your work. Go from messy draft to better version—again and again.
            </p>
            <div className="mt-10 flex gap-x-6 justify-center">
              <Button href="/register" color="blue">
                Start 14-Day Free Trial
              </Button>
              <Button href="#" variant="outline" color="white">
                View Demo
              </Button>
            </div>
          </div>
          
          {/* App Screenshot */}
          <div className="mt-16 w-full max-w-6xl">
            <div className="relative">
              <Image
                src={appScreenshot}
                alt="Refineset application interface showing the iteration workflow"
                className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-white/10"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}