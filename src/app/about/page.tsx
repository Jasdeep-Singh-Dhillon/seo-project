import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Smith Bagget | FlaminGO Founder | Shark Tank",
  description:
    "Smith Baggett founder of FlaminGO, a newly release pre-charged phone charger, appeared at Shark Tank on February 7, 2025.",
};

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full m-auto relative">
          <Image
            width={1700}
            height={586}
            src={"/images/hero_desktop.png"}
            alt={"Flock of Flamingo"}
            className="md:block hidden"
          />
          <Image
            width={1024}
            height={600}
            src={"/images/hero_mobile.png"}
            alt={"Flock of Flamingo"}
            className="block md:hidden"
          />
          <span className="absolute top-1/2 left-1/3 right-1/3 text-4xl font-extrabold text-white">
            About Us
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-4xl">
                <h1>Smith Baggett: Innovator Behind the FlaminGO Charger</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              Smith Baggett, a fourth-generation cattle rancher and auctioneer
              from Pulaski, Georgia, has seamlessly blended his agricultural
              roots with technological innovation. While managing his cattle
              ranch, Baggett identified a recurring problem: the lack of
              reliable charging solutions in rural areas. This insight led to
              the creation of the FlaminGO Charger, a compact, pre-charged
              device designed to keep essential gadgets powered on the go.
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>FlaminGO Charger: A Game-Changer in Portable Power</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              The FlaminGO Charger is not just another portable charger;
              it&apos;s a thoughtfully designed solution for individuals who
              need dependable power in various settings. Measuring 2 inches by 2
              inches and weighing only 2 ounces, it&apos;s small enough to fit
              in a pocket, backpack, or purse. Its pre-charged feature ensures
              immediate usability, and the patented 3-in-1 tip is compatible
              with micro USB, USB-C, and Lightning devices, including
              smartphones, earbuds, and vape pens.
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>From Rural Challenges to Entrepreneurial Success</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              Baggett&apos;s journey from a cattle rancher to the founder of a
              tech product company is both inspiring and testament to his
              problem-solving mindset. The idea for the FlaminGO Charger sparked
              during a visit to Savannah, Georgia, when he and his friends
              experienced the inconvenience of dead phone batteries without
              accessible charging options. Determined to find a solution,
              Baggett conceptualized a charger that was both portable and
              reliable, leading to the birth of FlaminGO.
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>Shark Tank Appearance: Validation and Growth</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`In February 2025, Baggett's entrepreneurial efforts culminated in a significant milestone: an appearance on ABC's "Shark Tank." Dressed in his signature cowboy attire, he presented the FlaminGO Charger to the panel of investors. His pitch captivated the sharks, leading to an investment of $100,000 from Barbara Corcoran for a 22% equity stake. Corcoran praised Baggett's business acumen and enthusiasm, stating, "He's built a great business and has the grit, hustle, and enthusiasm it takes to turn flaminGO into a household name." `}
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>FlaminGO&apos;s Impact and Future Outlook</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`The exposure from "Shark Tank" significantly boosted FlaminGO's visibility and sales. The company received substantial orders, including a test order of 50,000 units from a major convenience store chain. Baggett's vision extends beyond just selling chargers; he aims to integrate FlaminGO into various aspects of daily life, ensuring that individuals, especially those in rural areas, have access to reliable charging solutions whenever needed. `}
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>Conclusion</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`Smith Baggett's story exemplifies innovation born from necessity. By identifying a gap in the market and leveraging his unique perspective as a cattle rancher, he developed a product that addresses a universal need. The FlaminGO Charger stands as a testament to his dedication to quality, reliability, and user-centric design, promising a future where staying connected is effortless and convenient. `}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
