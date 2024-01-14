import Heading from "../components/sections/headingPages/Heading";
import Specials from "../components/sections/headingPages/Specials";
import Testimonials from "../components/sections/headingPages/Testimonials";


export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
      </main>
    </>
  );
}
