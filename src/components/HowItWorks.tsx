import { Container } from '@/components/Container'
import Image from 'next/image'
import firstScreen from '@/images/screenshots/First Screen.png'
import secondScreen from '@/images/screenshots/Second Screen.png'
import thirdScreen from '@/images/screenshots/Thrid Screen.png'

const steps = [
  {
    step: '1',
    title: 'Start a New Iteration',
    description: 'Upload screenshots, photos, or videos of your current work. Whether you\'re building a product, designing an interface, or iterating on a project — Refineset captures your exact starting point.',
    subtitle: 'See clearly where you are before deciding where to go.',
    icon: '📸',
    image: firstScreen,
  },
  {
    step: '2',
    title: 'Find the Next Improvement',
    description: 'Write your thoughts. What\'s working? What\'s not? Refineset helps you reflect through structured writing — guiding you to uncover the next step that actually moves the needle.',
    subtitle: 'Progress starts with clarity.',
    icon: '💭',
    image: secondScreen,
  },
  {
    step: '3',
    title: 'Close the Gap',
    description: 'Act on what you\'ve discovered. Use your insight to make the improvement — and move from one version to a better one.',
    subtitle: 'One change at a time, better becomes inevitable.',
    icon: '🎯',
    image: thirdScreen,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300">
            Three simple steps to transform your work from good to better, one iteration at a time.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          <div className="grid gap-24 lg:gap-32">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-32 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 lg:left-1/2 lg:-translate-x-px lg:top-24 lg:h-40" />
                )}
                
                <div className={`flex flex-col gap-12 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:items-center`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 lg:max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white">
                        {step.step}
                      </div>
                      <div className="text-3xl">{step.icon}</div>
                    </div>
                    
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg">
                      {step.description}
                    </p>
                    <p className="mt-4 text-sm font-medium italic text-blue-400 sm:text-base">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 lg:max-w-lg">
                    <div className="relative">
                      <Image
                        src={step.image}
                        alt={`${step.title} - Refineset application screenshot`}
                        className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-white/10"
                        priority={index === 0}
                      />
                      {/* Subtle overlay for better text contrast on hover */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <p className="text-lg font-medium text-white">
            Ready to start refining?
          </p>
          <p className="mt-2 text-gray-300">
            Join thousands of creators who are building better, one iteration at a time.
          </p>
        </div>
      </Container>
    </section>
  )
}
