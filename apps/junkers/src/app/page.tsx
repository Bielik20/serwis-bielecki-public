import { About } from '@serwis-bielecki-public/components/sections/about';
import { Area } from '@serwis-bielecki-public/components/sections/area';
import { Contact } from '@serwis-bielecki-public/components/sections/contact';
import { HomeJunkers } from '@serwis-bielecki-public/components/sections/home-junkers';
import { Services } from '@serwis-bielecki-public/components/sections/services';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
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
