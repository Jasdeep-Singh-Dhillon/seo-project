import Image from "next/image";
import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FlaminGO Chargers | Wholesale",
  description:
    "Become unforgettable with FlaminGO Charger's bulk customization options in a product that will be used daily showcasing your brand.",
};

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full m-auto relative">
          <Image
            width={1700}
            height={586}
            src={
              "/images/warehouse_of_flamingo_chargers_for_wholesale_desktop.webp"
            }
            alt={"Warehouse of flamingo chargers for wholesale"}
            className="md:block hidden"
          />
          <Image
            width={1024}
            height={600}
            src={"/images/warehouse_of_flamingo_chargers_for_wholesale.webp"}
            alt={"Warehouse of flamingo chargers for wholesale"}
            className="block md:hidden"
          />
          <span className="absolute top-1/2 left-1/2 right-1/3 text-4xl font-extrabold text-white text-center drop-shadow-2xl drop-shadow-rose-500">
            Wholesale
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle>
                <h1 className="font-bold text-4xl">
                  FlaminGO Chargers Wholesale
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              {`In today's fast-paced digital world, ensuring that electronic devices remain powered is essential for both businesses and consumers. FlaminGO Charger, renowned for its innovative design and functionality, offers a unique opportunity for businesses to provide their customers with a reliable charging solution. Featured on ABC's "Shark Tank," FlaminGO has garnered significant attention, making it a sought-after product in the market.`}
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">
                  Why Choose FlaminGO Chargers for Wholesale?
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">
                    1. Proven Market Demand:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` FlaminGO's appearance on "Shark Tank" highlighted its potential, leading to increased consumer interest and demand. This exposure ensures that businesses investing in FlaminGO Chargers are aligning with a product that has a proven track record.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    2. Customizable Branding Opportunities:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` FlaminGO offers extensive customization options, allowing businesses to tailor the chargers to their brand's identity. From custom packaging to color choices and direct logo printing, businesses can create a cohesive brand experience for their customers. `}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    3. Universal Compatibility:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Equipped with a patented 3-in-1 charging tip, FlaminGO Chargers are compatible with micro-USB, USB-C, and iPhone devices. This versatility ensures that end-users can charge a wide range of devices, enhancing the product's appeal.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                  <AccordionTrigger className="font-semibold">
                    4. Compact and Portable Design:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Designed for on-the-go use, FlaminGO Chargers are lightweight and compact, making them convenient for daily commutes, travel, or outdoor activities. Their portability adds to their practicality, making them a must-have accessory for modern consumers.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="p-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">
                  Customization Options for Wholesale Orders
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">
                    Packaging:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Businesses can opt for custom bags or boxes that align with their brand's aesthetics, ensuring a cohesive unboxing experience for customers.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    Color Choices:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` FlaminGO offers flexibility in color selection, allowing businesses to match the chargers with their brand colors, enhancing brand recognition. `}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    Direct Logo Printing:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` High-quality printing of logos directly on the chargers ensures brand visibility and reinforces brand identity with every use.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="p-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Order Details</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">
                    Minimum Bulk Order:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` A minimum order of 500 chargers is required for wholesale purchases, making it suitable for businesses of various sizes.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    Shipping:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` FlaminGO provides worldwide shipping with customizable options, ensuring timely delivery to meet business needs.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    Payment Terms:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Flexible payment terms are available based on order quantity, accommodating the financial planning of businesses.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">
                  Why Partner with FlaminGO Charger?
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">Safety Assurance:</AccordionTrigger>
                  <AccordionContent>
                    {` FlaminGO Chargers are lab-certified for safety, providing businesses and consumers with confidence in the product's quality and reliability.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    Versatile Charging:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` With the capability to charge various devices, including phones, vape pens, and earbuds, FlaminGO Chargers cater to a broad audience.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    Idea for Gifting and Events:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` The customizable nature of FlaminGO Chargers makes them perfect for corporate gifting, promotional events, and giveaways, enhancing brand visibility and engagement.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">
                  How to Place a Wholesale Order
                </h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="font-semibold">
                    Contact FlaminGO Sales Team:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Reach out through the wholesale contact form on the official website to initiate discussions about your wholesale needs.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger className="font-semibold">
                    Discuss Customization Requirements:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Engage with the sales team to finalize customization options, including packaging, colors, and logo placement.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger className="font-semibold">
                    Confirm Order Details:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Review and confirm order quantities, shipping details, and payment terms to ensure a smooth transaction.`}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="4">
                  <AccordionTrigger className="font-semibold">
                    Receive and Distribute:
                  </AccordionTrigger>
                  <AccordionContent>
                    {` Once the order is fulfilled, distribute the chargers to your customers, enhancing their experience with your brand.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="px-6 m-4">
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Conclusion</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="my-2">
              Integrating <Link href={"/"} className="underline">FlaminGO Chargers</Link> into your product offerings not only provides a valuable service to your customers but also strengthens your brand&apos;s presence in a competitive market. With customization options, proven demand, and a product that combines safety with versatility, FlaminGO Chargers present a compelling wholesale opportunity for businesses aiming to enhance their customer experience and brand recognition.
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
