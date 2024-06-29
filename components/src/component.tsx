import { About } from './sections/about';
import { Area } from './sections/area';
import { Contact } from './sections/contact';
import { HomeJunkers } from './sections/home-junkers';
import { Services } from './sections/services';

export function Component() {
  return (
    <>
      <HomeJunkers />
      <About />
      <Services />
      <Area />
      <Contact />
    </>
  );
}
