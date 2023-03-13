import React from "react";
import karachi from "../assets/karachi.webp";
import isb from "../assets/isb.jpg";

const About = () => {
  return (
    <section id="About" className="text-white py-10 px-8">
      <div className="mx-auto max-w-[800px]">
        <h1 className=" text-4xl md:text-6xl text-center  text-[#04BF9D] py-8">
          ABOUT US
        </h1>
        <img src={isb} />
        <p className="text-center  py-2">
          Islamabad Capital Territory, Pakistan
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col space-y-10 mt-10">
          <div>
            <h1 className="text-3xl md:text-5xl my-8  text-[#04BF9D]">
              MISSION
            </h1>
            <p className="text-md">
              It is MOTOWISE’s continual goal to provide high quality,
              comfortable, and reasonably priced helmets to motorcyclists around
              the world. As a direct result of this mission, since 1992,
              MOTOWISE has succeeded in maintaining the status as the #1 helmet
              brand in Pakistan (refer to Motorcycle Industry Magazine
              1992-present). More importantly, motorcyclists worldwide make
              MOTOWISE their brand of choice. And with a wide selection of
              helmets in the mid to high-end range, MOTOWISE has expanded
              consumers’ choice in helmets.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl my-8  text-[#04BF9D]">
              HISTORY
            </h1>
            <p className="text-md">
              Since 1971, MOTOWISE has specialized in manufacturing motorcycle
              helmets exclusively. The combination of this extensive specialized
              manufacturing experience, innovative ideas, and reasonable pricing
              resulted in MOTOWISE’s success in worldwide markets. In the modern
              era of helmet manufacturing, MOTOWISE is proud to say that our
              helmets are constantly tested in both laboratory testing as well
              as in “real” life circumstances for quality assurance. MOTOWISE is
              only one of very few helmet companies that are equipped with its
              own state of the art wind tunnel testing laboratory to test for
              aerodynamics, ventilation, noise, etc. Further, MOTOWISE has two
              helmet factories in two different countries: Korea and Vietnam.
              These factories provide strategic venues to produce high end, mid,
              and entry-level products to satisfy the demands of consumers
              around the world.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl my-8  text-[#04BF9D]">
              HELMETS
            </h1>
            <p className="text-md">
              In the fall of 2012, MOTOWISE expanded its range with the
              introduction of RPHA, a series of premium helmets that feature
              Premium Integrated Matrix Plus (PIM+) construction for an
              extremely lightweight shell, and superior aerodynamics and
              comfort. This model showcases our technical capabilities and
              innovations such as our advanced ventilation channeling system and
              our unique composite shell designs. What sets our RPHA 11 apart is
              that it offers the quality and features of high-end helmets at
              prices that are accessible to the average consumer, an
              accomplishment our high-end competitors have not been able to do.
              The RPHA 11 helmet offers extremely light weight for rider
              comfort. In fact, it is one of the lightest in its class. In
              addition to the RPHA 11, MOTOWISE has released the RPHA 70 ST and
              the RPHA 90. The RPHA 70 ST and RPHA 90 shells are both composed
              of the PIM+ composite to reduce weight while maintaining superior
              shock absorption. The RPHA 70 ST is constructed for sport-touring
              with aerodynamics and adjustable ventilation designed for upright
              riding. The RPHA 90 is a modular helmet designed for touring, with
              rider convenience and comfort as the top priorities. The RPHA 90
              is a solution to the average bulky and heavy modular helmet, which
              is crucial for long journeys. MOTOWISE has also teamed up with
              some of the biggest brands in the world to produce Officially
              Licensed Marvel, Star Wars and Pixar motorcycle Helmets. The first
              line of licensed graphics launched in 2016. In 2018, MOTOWISE
              announced a new partnership with DC to expand the licensed
              graphics line-up with new comic characters, and more exciting
              graphics to come in 2019 and 2020. MOTOWISE won’t stop here, as we
              work to incorporate technology into helmets in order to lead
              innovative features in the industry. With the addition of the
              helmet models mentioned above, it is clear that MOTOWISE continues
              to be a brand that is friendly to motorcyclists around the world
              providing quality, comfortable, stylish and affordable helmets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
