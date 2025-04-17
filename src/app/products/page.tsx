import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FlaminGO Charger One-Pack | Shark Tank",
  description:
    "FlaminGO Charger One-Pack featured on Shark Tank to charge all your mobile devices. Portable charging station and pre charged for ease of use.",
};

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full m-auto relative">
          <Image
            width={1700}
            height={586}
            src={"/images/pink_flamingo_portable_charger_desktop.webp"}
            alt={"Pink FlaminGO Portable Portable Charger"}
            className="md:block hidden"
          />
          <Image
            width={1024}
            height={600}
            src={"/images/pink_flamingo_portable_charger.webp"}
            alt={"Pink FlaminGO Charger"}
            className="block md:hidden"
          />
          <span className="absolute top-1/2 left-1/3 right-1/3 text-4xl font-extrabold text-white text-center">
            FlaminGO Charger One-Pack
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card className="px-6 m-4 justify-center col-span-full">
            <CardHeader>
              <CardTitle>
                <h1 className="font-bold text-4xl">
                  What is the FlaminGO Charger?
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`The FlaminGO Charger is a compact, pre-charged portable charger designed to keep your devices powered on the go. Developed by Smith Baggett, a fourth-generation cattle rancher and auctioneer from Pulaski, Georgia, this innovative charger addresses the common problem of device battery depletion. Baggett's entrepreneurial spirit led him to create a solution that is both practical and reliable. `}
            </CardContent>
          </Card>
          <Card className="px-6 m-4 justify-center">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Key Features:</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <ul>
                <li>
                  <span className="font-semibold">
                    Pre-Charged and Ready to Use:
                  </span>
                  {` Each FlaminGO Charger comes pre-charged at 3000 mAh, ensuring immediate usability upon purchase. It's also rechargeable, allowing for multiple uses. Depending on the device model, it can charge most phones up to 80%. `}
                </li>
                <li>
                  <span className="font-semibold">
                    Universal Compatibility:
                  </span>
                  {` Equipped with a patented 3-in-1 charging tip, the FlaminGO Charger is compatible with micro-USB, USB-C, and iPhone devices. This versatility makes it a one-stop solution for various charging needs. `}
                </li>
                <li>
                  <span className="font-semibold">Compact and Portable: </span>
                  {` Weighing just 2 ounces and measuring 2 inches by 2 inches, the charger easily fits into pockets, backpacks, or purses, making it an ideal travel companion.  `}
                </li>
                <li>
                  <span className="font-semibold">Multi-Device Charging: </span>
                  {`Beyond smartphones, the FlaminGO Charger can power vape pens, earbuds, and more, ensuring all your essential devices stay charged.`}
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 m-4 justify-center">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">
                  The Shark Tank Experience
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`In February 2025, Smith Baggett introduced the FlaminGO Charger to the Sharks on ABC's "Shark Tank." His engaging presentation and innovative product impressed the investors, leading Barbara Corcoran to offer $100,000 for a 25% equity stake. Corcoran praised Baggett's business acumen and enthusiasm, stating, "He's built a great business and has the grit, hustle, and enthusiasm it takes to turn FlaminGO into a household name." `}
            </CardContent>
          </Card>
          <Card className="px-6 m-4 justify-center">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Product Variants</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`To cater to diverse needs, FlaminGO offers several purchasing options:`}
              <ul>
                <li>
                  <span className="font-semibold">
                    FlaminGO Charger One-Pack:
                  </span>
                  {` Ideal for individual users, this pack provides a single charger for personal use.`}
                </li>
                <li>
                  <span className="font-semibold">
                    FlaminGO Charger Three-Pack:
                  </span>
                  {` Perfect for families or small businesses, this pack offers three chargers, ensuring multiple devices can be powered simultaneously. `}
                </li>
                <li>
                  <span className="font-semibold">
                    FlaminGO Charger Five-Pack:
                  </span>
                  {` Designed for larger groups or corporate use, this pack includes five chargers, making it convenient for teams or families. `}
                </li>
                <li>
                  <span className="font-semibold">
                    FlaminGO Charger Ten-Pack:
                  </span>
                  {` The ten-pack is tailored for organizations or events, providing ample chargers for extensive use.`}
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="px-6 m-4 justify-center">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Customer Testimonials</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`Users have praised the FlaminGO Charger for its reliability and convenience. Many appreciate its compact design and the assurance of having a charged device throughout the day. The charger's ability to power multiple device types has also been highlighted as a significant advantage.`}
            </CardContent>
          </Card>
          <Card className="px-6 m-4 justify-center">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Where to Purchase</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`The FlaminGO Charger is available for purchase on the official website, flamingocharger.com. The site offers detailed information on each product variant, pricing, and current promotions. Customers can choose the pack that best suits their needs and enjoy the convenience of having a reliable charging solution at hand.`}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
