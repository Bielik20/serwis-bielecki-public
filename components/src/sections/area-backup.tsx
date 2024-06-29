import { BoltIcon, CogIcon, PuzzleIcon } from '../icons';

export function Area() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row px-4 md:px-6 gap-10">
          <img
            src="https://bielik20.gitlab.io/junkers-bielecki/map.f3ffa597.png"
            width="1403"
            height="992"
            alt="Junkers Bielecki Products"
            className="grow mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
            loading='lazy'
          />

        <div className="flex-none space-y-4 text-center lg:text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Rejon Działania
          </h2>
          <div className="grid gap-4 justify-center lg:justify-start">
            <ul className="space-y-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left">
              <li>Poznań</li>
              <li>Oborniki</li>
              <li>Szamotuły</li>
              <li>Grodzisk Wielkopolski</li>
              <li>Śrem</li>
              <li>Środa Wielkopolska</li>
              <li>Września</li>
              <li>Pobiedziska</li>
              <li>Buk</li>
              <li>Opalenice</li>
              <li>Stęszew</li>
              <li>Murowana Goślina</li>
              <li>Kościan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
