import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  BoltIcon,
  BriefcaseIcon,
  CogIcon,
  GaugeIcon,
  PuzzleIcon,
  SettingsIcon,
  ShieldIcon,
  WrenchIcon,
} from './icons';

export function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="800"
            height="600"
            alt="Junkers Bielecki Products"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Elevate Your Business with Junkers Bielecki
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our high-quality products and innovative solutions
              designed to transform your business.
            </p>
            <div className="flex flex-col gap-2 justify-center min-[400px]:flex-row">
              <Button>Learn More</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Comprehensive Services
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From design to installation, our team of experts provides
              end-to-end solutions to meet your business needs.
            </p>
            <div className="grid gap-4 justify-center lg:justify-start">
              <div className="flex items-start gap-4">
                <WrenchIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Installation</h3>
                  <p className="text-muted-foreground">
                    Our skilled technicians ensure seamless installation and
                    setup.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SettingsIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Maintenance</h3>
                  <p className="text-muted-foreground">
                    Proactive maintenance and repair services to keep your
                    equipment running smoothly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Consulting</h3>
                  <p className="text-muted-foreground">
                    Our experts provide tailored solutions to optimize your
                    business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="800"
            height="600"
            alt="Junkers Bielecki Services"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="800"
            height="600"
            alt="Junkers Bielecki Products"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our High-Quality Products
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our extensive range of top-of-the-line products designed
              to meet your unique business needs.
            </p>
            <div className="grid gap-4 justify-center lg:justify-start">
              <div className="flex items-start gap-4">
                <BoltIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Industrial Equipment
                  </h3>
                  <p className="text-muted-foreground">
                    Reliable and efficient industrial equipment for various
                    applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CogIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Automation Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Cutting-edge automation technologies to streamline your
                    operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PuzzleIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Customized Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Tailored solutions to meet your unique business
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Key Features
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the features that set Junkers Bielecki apart from the
              competition.
            </p>
            <div className="grid gap-4 justify-center lg:justify-start">
              <div className="flex items-start gap-4">
                <GaugeIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">High Performance</h3>
                  <p className="text-muted-foreground">
                    Our products are designed for maximum efficiency and
                    reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Robust Safety</h3>
                  <p className="text-muted-foreground">
                    Prioritizing safety in every aspect of our products and
                    services.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SettingsIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Customizable Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Tailored solutions to meet your unique business
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="800"
            height="600"
            alt="Junkers Bielecki Features"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fill out the form below to request a quote or learn more about our
              products and services.
            </p>
            <form className="space-y-4 mx-auto max-w-md lg:mx-0">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Clients Say
            </h2>
            <div className="grid gap-4 justify-center lg:justify-start">
              <Card>
                <CardContent>
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Junkers Bielecki has been a game-changer for our\n
                      business. Their products and services have\n transformed
                      our operations and helped us achieve\n unprecedented
                      growth."
                    </p>
                    <cite className="text-sm font-medium">
                      - John Doe, CEO, ABC Corporation
                    </cite>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "Junkers Bielecki's attention to detail and\n commitment
                      to customer satisfaction is truly\n unparalleled. We
                      couldn't be happier with the\n results."
                    </p>
                    <cite className="text-sm font-medium">
                      - Jane Smith, Operations Manager, XYZ Industries
                    </cite>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
