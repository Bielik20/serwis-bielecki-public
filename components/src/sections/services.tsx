import {
  BoltIcon,
  FlameIcon,
  HeadphonesIcon,
  HeartIcon,
  HeaterIcon,
  SearchIcon,
  ShoppingCartIcon,
  WindIcon,
  WrenchIcon,
} from '../icons';

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Usługi
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary p-6 text-primary-foreground flex items-center justify-center">
              <FlameIcon className="h-10 w-10" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold">Kotły</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary p-6 text-primary-foreground flex items-center justify-center">
              <HeaterIcon className="h-10 w-10" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold">Pompy Ciepła</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary p-6 text-primary-foreground flex items-center justify-center">
              <WindIcon className="h-10 w-10" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold">Klimatyzacje</h3>
          </div>
        </div>

        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        <p className="text-center mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Oferujemy szeroki zakres usług, aby jak najlepiej Ci pomóc.
        </p>
        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Sprzedaż</h3>
            <p className="text-muted-foreground text-center">
              Doradzimy, co kupić i przeprowadzimy profesjonalną wycenę.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <BoltIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Instalacje</h3>
            <p className="text-muted-foreground text-center">
              Przywieziemy, zamontujemy i uruchomimy zakupione urządzenie.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <WrenchIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Naprawy</h3>
            <p className="text-muted-foreground text-center">
              W razie awarii naprawimy Twoje urządzenie.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <SearchIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Przeglądy</h3>
            <p className="text-muted-foreground text-center">
              Przeprowadzimy szczegółowy przegląd Twojego urządzenia.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <HeartIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Konserwacje</h3>
            <p className="text-muted-foreground text-center">
              Wyczyścimy oraz zapewnimy długowieczność Twojego urządzenia.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center">
              <HeadphonesIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold">Doradztwo</h3>
            <p className="text-muted-foreground text-center">
              Pomożemy wybrać sprzęt i przeprowadzić wstępną diagnozę
              telefonicznie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
