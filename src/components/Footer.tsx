import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto" />
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10">
          <p className="text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Refineset. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
