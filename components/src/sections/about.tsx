export function About() {
  return <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div
      className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-4 text-center lg:text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          O Firmie
        </h2>
        <p
          className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Ponad 25 lat, jesteśmy z wami od 1995 roku, dbając o jakoś konserwowanego sprzętu.
        </p>
        <p className="text-muted-foreground">
          W naszej pracy stawiamy na rzetelność, fachowość i najwyższą jakość świadczonych
          usług, a nasi serwisanci odbyli szereg szkoleń, dzięki którym są w stanie zapewnić
          Panstwo fachową pomoc w każdej sytuacji.
        </p>
      </div>
      <img
        src="https://generated.vusercontent.net/placeholder.svg"
        width="800"
        height="600"
        alt="O Firmie"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
      />
    </div>
  </section>
}
