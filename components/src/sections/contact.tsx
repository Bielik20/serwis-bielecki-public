import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from '../icons';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
            Kontakt
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            Skontaktuj się z nami, aby umówić wizytę:
          </p>
          <div className="grid gap-4 justify-center lg:justify-start">
            <div className="flex items-start gap-4">
              <MapPinIcon className="h-6 w-6 text-primary" aria-label="Adres" />
              <div>
                <h3 className="text-lg font-semibold">
                  <a
                    href="https://maps.app.goo.gl/3mswi4CupVwoGDZW6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    ul. Spławie 41R, 61-312 Poznań
                  </a>
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon
                className="h-6 w-6 text-primary"
                aria-label="Telefon"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <a href="tel:+48601706962" className="hover:underline">
                    +48 601 706 962
                  </a>
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MailIcon className="h-6 w-6 text-primary" aria-label="Email" />
              <div>
                <h3 className="text-lg font-semibold">
                  <a
                    href="mailto:bielecki@junkers-serwis.poznan.pl"
                    className="hover:underline"
                  >
                    bielecki@junkers-serwis.poznan.pl
                  </a>
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ClockIcon
                className="h-6 w-6 text-primary"
                aria-label="Godziny otwarcia w dni robocze"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Pon. - Pt. 8:00 - 20:00
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ClockIcon
                className="h-6 w-6 text-primary"
                aria-label="Godziny otwarcia w weekend"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Sob. - Ndz. 9:00 - 14:00
                </h3>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://generated.vusercontent.net/placeholder.svg"
          width="800"
          height="600"
          alt="Mapa z lokalizacją firmy"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
