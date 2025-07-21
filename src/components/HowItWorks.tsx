import { Container } from '@/components/Container'
import Image from 'next/image'
import firstScreen from '@/images/screenshots/First Screen.png'
import secondScreen from '@/images/screenshots/Second Screen.png'
import thirdScreen from '@/images/screenshots/Thrid Screen.png'

const steps = [
  {
    step: '01',
    title: 'Start a New Iteration',
    description: 'Upload screenshots, photos, or videos of your current work. Whether you\'re building a product, designing an interface, or iterating on a project — Refineset captures your exact starting point.',
    subtitle: 'See clearly where you are before deciding where to go.',
    image: firstScreen,
  },
  {
    step: '02',
    title: 'Find the Next Improvement',
    description: 'Write your thoughts. What\'s working? What\'s not? Refineset helps you reflect through structured writing — guiding you to uncover the next step that actually moves the needle.',
    subtitle: 'Progress starts with clarity.',
    image: secondScreen,
  },
  {
    step: '03',
    title: 'Close the Gap',
    description: 'Act on what you\'ve discovered. Use your insight to make the improvement — and move from one version to a better one.',
    subtitle: 'One change at a time, better becomes inevitable.',
    image: thirdScreen,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />
      
      <Container className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
            How it works
          </div>
          <h2 className="mt-8 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Three steps to better
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-400">
            A simple process designed to help you move from good to great, one iteration at a time.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-20 max-w-[90rem] sm:mt-28">
          <div className="space-y-32 sm:space-y-40">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full z-0 h-32 w-px -translate-x-px bg-gradient-to-b from-gray-700/50 via-gray-800/30 to-transparent sm:h-40" />
                )}
                
                <div className={`relative z-10 grid gap-20 lg:grid-cols-5 lg:gap-24 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Content */}
                  <div className={`flex flex-col justify-center lg:col-span-2 ${
                    index % 2 === 1 ? 'lg:col-start-4' : ''
                  }`}>
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 text-sm font-medium text-gray-400 backdrop-blur-sm">
                          {step.step}
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-8 text-gray-300">
                        {step.description}
                      </p>
                      <p className="text-base font-medium text-blue-400">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative lg:col-span-3 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div className="group relative">
                      {/* Device Frame */}
                      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-3 backdrop-blur-sm transition-all duration-700 group-hover:border-gray-700 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                        <div className="overflow-hidden rounded-xl">
                          <Image
                            src={step.image}
                            alt={`${step.title} - Step ${step.step}`}
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </div>
                      
                      {/* Ambient Glow */}
                      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-28 max-w-2xl text-center sm:mt-36">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-800 bg-gray-900/50 px-6 py-3 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-gray-300">Ready to start refining</span>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Join thousands of creators building better, one iteration at a time.
          </p>
        </div>
      </Container>
    </section>
  )
}
