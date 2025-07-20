export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center space-x-2" {...props}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
        <span className="text-lg font-bold text-white">R</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        Refineset
      </span>
    </div>
  )
}
