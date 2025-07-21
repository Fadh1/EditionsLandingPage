export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center space-x-3" {...props}>
      {/* Icon/Mark */}
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 ring-1 ring-white/10 transition-all duration-300 group-hover:shadow-blue-500/40">
          <span className="text-base font-bold text-white tracking-tight">R</span>
        </div>
      </div>
      
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white leading-none">
          Refineset
        </span>
        <span className="hidden sm:block text-[10px] font-medium tracking-widest text-gray-400 uppercase leading-none mt-0.5">
          Again, But Better
        </span>
      </div>
    </div>
  )
}
