import Image from 'next/image'
import image from './about.png'

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4 text-center lg:text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            O Firmie
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Jesteśmy z Wami od ponad 25 lat, dbając o jakość konserwowanego
            sprzętu od 1995 roku.
          </p>
          <p className="text-muted-foreground">
            W naszej pracy stawiamy na rzetelność, fachowość i najwyższą jakość
            świadczonych usług. Nasi serwisanci odbyli szereg szkoleń, dzięki
            którym są w stanie zapewnić Państwu profesjonalną pomoc w każdej
            sytuacji.
          </p>
        </div>
        <Image
          src={image}
          placeholder="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAUAAkA4JQBOhxAAJRn3oQAA/uGlUKsGw1aus1KHZVxwzKab+6l+dDby1EJ1Tr0RH84sjOlfW2yOPbQqNph81AAAAA=="
          alt="Zespół serwisantów Junkers Bosch"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
    </section>
  );
}
