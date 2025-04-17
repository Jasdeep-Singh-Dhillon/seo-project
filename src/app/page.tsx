import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FlaminGO Chargers",
  description:
    "Discover Flamingo Charger, the innovative pink charger featured on Shark Tank. From Flamingo pre-charged phone chargers with connectors for all devices stay powered on the go with our cutting-edge solutions. Get your Flamingo phone charger today.",
};

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full m-auto relative">
          <Image
            width={1700}
            height={586}
            src={"/images/portable_flamingo_charger.png"}
            alt={"Person putting Flamingo Charger in their bag"}
            className="md:block hidden"
          />
          <Image
            width={1024}
            height={600}
            src={"/images/portable_flamingo_charger_mobile.png"}
            alt={"Person putting Flamingo Charger in their bag"}
            className="block md:hidden"
          />
          <span className="text-rose-500 absolute top-2/4 left-16 text-6xl font-extrabold drop-shadow-zinc-700">
            Be in Charge!
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card className="px-6 m-4">
            <CardHeader className="font-bold text-4xl">
              <CardTitle>
                <h1>
                  The Birth of Flamingo Charger: A Shark Tank Success Story
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              The Flamingo Charger gained national recognition after its
              appearance on Shark Tank. Entrepreneurs introduced this shark tank
              charger as a game-changing solution for people who are always on
              the move. With the increasing demand for portable power sources,
              the Flamingo Charger stood out due to its pre-charged phone
              charging technology and sleek, stylish design. The Flamingo phone
              charger Shark Tank featured quickly captured the attention of
              consumers, thanks to its reliability, efficiency, and aesthetic
              appeal.{" "}
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader className="font-bold text-3xl">
              <CardTitle>
                <h2>
                  The Revolutionary Flamingo Charger: A Game-Changer in the
                  Charging Industry
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              In today&apos;s fast-paced world, staying connected is more
              important than ever. Whether you’re traveling, commuting, or
              simply out and about, having a reliable phone charger is
              essential. That’s where the Flamingo Charger comes in. This
              innovative charging solution, featured on Shark Tank, is making
              waves in the industry with its unique design, superior
              performance, and unmatched convenience. If you’re looking for the
              best pink charger Shark Tank has ever showcased, keep reading to
              learn why the Flamingo Charger is the ultimate choice for all your
              charging needs.
            </CardContent>
          </Card>
          <Card className="p-6 m-4">
            <CardHeader className="font-bold text-3xl">
              <CardTitle>
                <h2>Why Choose the Flamingo Charger?</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="my-2">
                If you’re tired of dealing with tangled wires, slow charging
                speeds, and unreliable power banks, the Flamingo Charger is the
                solution you’ve been waiting for. Here’s why this shark charging
                station is a must-have:
              </span>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold">
                    1. Pre-Charged Convenience
                  </AccordionTrigger>
                  <AccordionContent>
                    One of the most innovative features of the Flamingo
                    pre-charged phone chargers is their ready-to-use
                    functionality. Unlike traditional power banks that require
                    hours of charging before use, the Flamingo Charger comes
                    fully charged and ready to go right out of the box. This
                    makes it the perfect emergency power source for those who
                    need a quick battery boost on the fly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bold">
                    2. Stylish and Unique Design
                  </AccordionTrigger>
                  <AccordionContent>
                    The Flamingo Charger isn’t just another charging device;
                    it’s a statement piece. With its sleek pink exterior, it has
                    become the go-to pink charger Shark Tank fans have raved
                    about. Its compact size allows you to slip it into your bag
                    or pocket easily, ensuring you’re always prepared.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bold">
                    3. Fast and Efficient Charging
                  </AccordionTrigger>
                  <AccordionContent>
                    Time is of the essence, and no one wants to wait hours for
                    their phone to charge. The Flamingo Charger delivers fast,
                    efficient power to your smartphone, ensuring you get the
                    battery boost you need in a matter of minutes. Whether
                    you’re using it as a backup power source or as your primary
                    charger, this charger Shark Tank introduced is designed for
                    optimal performance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-bold">
                    4. Eco-Friendly and Disposable Options
                  </AccordionTrigger>
                  <AccordionContent>
                    With sustainability in mind, the Flamingo Charger offers
                    eco-friendly disposable and reusable models. The disposable
                    version is perfect for one-time use, while the rechargeable
                    option provides long-term value. By opting for a Flamingo
                    phone, you’re choosing a charger that aligns with modern
                    environmental concerns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="font-bold">
                    5. Versatile Compatibility
                  </AccordionTrigger>
                  <AccordionContent>
                    The Flamingo Charger is compatible with a wide range of
                    devices, making it the ideal shark charging station for
                    multiple phone brands. Whether you use an iPhone or an
                    Android device, this charger ensures you stay connected no
                    matter what.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <h2>
                  How the Flamingo Charger Stands Out from the Competition
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              The market is saturated with portable chargers, but the Flamingo
              Charger has managed to set itself apart. Here’s how it compares
              traditional power banks and other charging solutions:
              <Accordion type="single" collapsible>
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">
                    No Cables Required
                  </AccordionTrigger>
                  <AccordionContent>
                    Unlike conventional chargers that require additional cables,
                    the Flamingo Charger is designed for direct plug-in use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    Instant Use
                  </AccordionTrigger>
                  <AccordionContent>
                    Thanks to its pre-charged technology, there’s no waiting
                    time required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    Ultra-Portable
                  </AccordionTrigger>
                  <AccordionContent>
                    Lightweight and compact, making it easy to carry wherever
                    you go.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                  <AccordionTrigger className="font-semibold">
                    Stylish and Trendy
                  </AccordionTrigger>
                  <AccordionContent>
                    The pink charger Shark Tank fans love is not only functional
                    but also fashionable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Where to Buy the Flamingo Charger
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              Looking to get your hands on a Flamingo phone charger Shark Tank
              featured? This revolutionary product is available online and in
              select retail stores. Various e-commerce platforms offer deals on
              Flamingo pre-charged phone chargers, ensuring you can find the
              best price for your needs.
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                Final Thoughts: The Future of Charging is Here
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              The Flamingo Charger is more than just a charging device, it’s a
              lifestyle upgrade. Designed for convenience, efficiency, and
              style, it has become one of the most sought-after charging
              solutions on the market. Whether you were introduced to it through
              Shark Tank or stumbled upon it while searching for a reliable
              shark charging station, one thing is clear: the Flamingo Charger
              is here to stay. So, if you’re looking for a charger Shark Tank
              has endorsed, the Flamingo Charger should be at the top of your
              list. Say goodbye to low battery anxiety and hello to hassle-free
              charging with the innovative, stylish, and powerful Flamingo
              Charger!
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
