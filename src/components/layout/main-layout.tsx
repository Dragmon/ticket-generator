interface Props {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[url(/assets/images/background-mobile.png)] bg-cover bg-bottom bg-no-repeat px-4 py-8 md:bg-[url(/assets/images/background-tablet.png)] lg:bg-[url(/assets/images/background-desktop.png)]">
      <img
        src="assets/images/pattern-squiggly-line-top.svg"
        alt="pattern squiggly line top"
        className="absolute top-4 right-0 h-auto w-[30vw] max-w-[400px] min-w-[120px] object-contain"
      />
      <img
        src="assets/images/pattern-lines.svg"
        alt="pattern-lines"
        className="pointer-events-none absolute top-0 left-0 min-w-5xl"
      />
      <header className="flex justify-center">
        <img src="/assets/images/logo-full.svg" alt="logo" className="mb-8" />
      </header>
      {children}
      <img
        src="assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="pattern squiggly line top"
        className="pointer-events-none absolute bottom-0 left-0 h-auto w-[55vw] object-contain"
      />
    </main>
  )
}
