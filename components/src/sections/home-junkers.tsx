export function HomeJunkers() {
  return <section className="w-full py-12 md:py-24 lg:py-32">
    <div
      className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
      <img
        src="https://generated.vusercontent.net/placeholder.svg"
        width="800"
        height="600"
        alt="Autoryzowany Serwis Junkers Bosch"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
      />
      <div className="space-y-4 text-center lg:text-center">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Autoryzowany Serwis Junkers Bosch
        </h1>
        <p
          className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Jesteśmy autoryzowanym serwisem, dzięki temu masz pewność jakości usług i pochodzenia
          naszych urządzeń.
        </p>
      </div>
    </div>
  </section>
}
