import { Container } from '@/components/Container'

const steps = [
  {
    step: '1',
    title: 'Start a New Iteration',
    description: 'Upload screenshots, photos, or videos of your current work. Whether you\'re building a product, designing an interface, or iterating on a project — Refineset captures your exact starting point.',
    subtitle: 'See clearly where you are before deciding where to go.',
    icon: '📸',
  },
  {
    step: '2',
    title: 'Find the Next Improvement',
    description: 'Write your thoughts. What\'s working? What\'s not? Refineset helps you reflect through structured writing — guiding you to uncover the next step that actually moves the needle.',
    subtitle: 'Progress starts with clarity.',
    icon: '💭',
  },
  {
    step: '3',
    title: 'Close the Gap',
    description: 'Act on what you\'ve discovered. Use your insight to make the improvement — and move from one version to a better one.',
    subtitle: 'One change at a time, better becomes inevitable.',
    icon: '🎯',
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

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="grid gap-16 lg:gap-24">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 h-24 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 lg:left-16 lg:top-20 lg:h-32" />
                )}
                
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
                  {/* Step number and icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white lg:h-20 lg:w-20">
                      {step.step}
                    </div>
                    <div className="text-3xl lg:text-4xl">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
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
