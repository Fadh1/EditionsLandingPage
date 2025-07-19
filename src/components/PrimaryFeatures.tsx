import { Container } from '@/components/Container'

const features = [
  {
    name: 'Feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: '🚀',
  },
  {
    name: 'Feature 2', 
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '⚡',
  },
  {
    name: 'Feature 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    icon: '🎯',
  },
]

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to get started
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our platform provides all the tools and features you need to build amazing experiences.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}