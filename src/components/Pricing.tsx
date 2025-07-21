import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx('h-4 w-4 flex-none', className)}
      viewBox="0 0 16 16"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="currentColor" className="opacity-20" />
      <path
        d="m5.5 7.5 2 2L11 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  )
}

function StarterBadge() {
  return (
    <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-sm">
      <span className="relative mr-2 h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
      </span>
      Beta Access
    </div>
  )
}

function PricingCard({
  name,
  price,
  description,
  href,
  features,
  comingSoon = false,
  badge,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  comingSoon?: boolean
  badge?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'group relative rounded-3xl transition-all duration-300 hover:scale-[1.02]',
        'bg-gradient-to-b from-gray-900/80 to-gray-950/80',
        'border border-gray-800/50 hover:border-gray-700/50',
        'backdrop-blur-xl shadow-2xl hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)]'
      )}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative p-8 sm:p-10">
        {/* Badge */}
        {badge && (
          <div className="mb-6">
            {badge}
          </div>
        )}

        {/* Plan Name & Description */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
            {name}
          </h3>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {comingSoon ? 'TBD' : price}
            </span>
            {!comingSoon && price !== 'Free' && (
              <span className="ml-2 text-lg font-medium text-gray-500">
                /month
              </span>
            )}
          </div>
          {comingSoon && (
            <p className="mt-2 text-sm text-gray-500">
              Pricing announced closer to launch
            </p>
          )}
        </div>

        {/* Features */}
        <div className="mb-10">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckIcon className="mr-3 mt-0.5 text-emerald-400" />
                <span className="text-gray-300 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          href={href}
          variant="solid"
          color="white"
          className={clsx(
            'w-full justify-center py-3 font-medium transition-all',
            comingSoon && 'opacity-75'
          )}
          aria-label={`${comingSoon ? 'Join waitlist for' : 'Get started with'} ${name}`}
        >
          {comingSoon ? 'Join Waitlist' : 'Start Free Trial'}
        </Button>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="relative py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/30 to-black" />
      
      <Container className="relative">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
            Pricing
          </div>
          <h2 className="mt-8 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Start refining today
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-400">
            Begin your journey to better work with beta access to Refineset.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-16 max-w-lg">
          <PricingCard
            name="Starter"
            price="Free"
            description="Perfect for individuals ready to iterate and improve their work through structured reflection."
            href="/register"
            badge={<StarterBadge />}
            comingSoon={false}
            features={[
              'Unlimited iterations and reflections',
              'Visual progress tracking',
              'Structured writing prompts',
              'Export your insights',
              'Basic analytics and patterns',
              'Email support'
            ]}
          />
        </div>

        {/* Future Plans Hint */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            Team and enterprise plans coming soon.{' '}
            <a
              href="/register"
              className="font-medium text-gray-400 hover:text-white transition-colors"
            >
              Get early access →
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
