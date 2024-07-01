import Image from 'next/image';
import image from './area.webp';

export function Area() {
  return (
    <section id="area" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <Image
          src={image}
          alt="Mapa regionu działania Serwis Bielecki"
          className="grow mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="space-y-4 text-center lg:text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Rejon Działania
          </h2>
          <h3 className="text-2xl font-semibold">Wielkopolska</h3>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nasz serwis działa na terenie: Poznań, Oborniki, Szamotuły, Grodzisk
            Wielkopolski, Śrem, Środa Wielkopolska, Września, Pobiedziska, Buk,
            Opalenice, Stęszew, Murowana Goślina, Kościan.
          </p>
        </div>
      </div>
    </section>
  );
}
