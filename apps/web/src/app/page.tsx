import { About } from '@serwis-bielecki-public/components/sections/about';
import { Area } from '@serwis-bielecki-public/components/sections/area';
import { Contact } from '@serwis-bielecki-public/components/sections/contact';
import { Home } from '@serwis-bielecki-public/components/sections/home';
import { Services } from '@serwis-bielecki-public/components/sections/services';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <Home />
      <About />
      <Services />
      <Area />
      <Contact />
    </>
  );
}
