import Image from "next/image";
import type { Metadata } from "next";

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
          <span className="absolute top-8 left-16 text-4xl font-extrabold text-white">
            Be in Charge!
          </span>
        </div>
        <section className="px-6">
          <h1 className="font-bold text-4xl">FlaminGO Chargers Wholesale</h1>
          <div className="my-2">
            {`In today's fast-paced digital world, ensuring that electronic devices remain powered is essential for both businesses and consumers. FlaminGO Charger, renowned for its innovative design and functionality, offers a unique opportunity for businesses to provide their customers with a reliable charging solution. Featured on ABC's "Shark Tank," FlaminGO has garnered significant attention, making it a sought-after product in the market.`}
          </div>
        </section>
        <section className="px-6">
          <h2 className="font-bold text-3xl">
            Why Choose FlaminGO Chargers for Wholesale?
          </h2>
          <div className="my-2">
            <ol>
              <li>
                <span className="font-semibold">1. Proven Market Demand:</span>
                {` FlaminGO's appearance on "Shark Tank" highlighted its potential, leading to increased consumer interest and demand. This exposure ensures that businesses investing in FlaminGO Chargers are aligning with a product that has a proven track record.`}
              </li>
              <li>
                <span className="font-semibold">
                  2. Customizable Branding Opportunities:
                </span>
                {` FlaminGO offers extensive customization options, allowing businesses to tailor the chargers to their brand's identity. From custom packaging to color choices and direct logo printing, businesses can create a cohesive brand experience for their customers. `}
              </li>
              <li>
                <span className="font-semibold">
                  3. Universal Compatibility:
                </span>
                {` Equipped with a patented 3-in-1 charging tip, FlaminGO Chargers are compatible with micro-USB, USB-C, and iPhone devices. This versatility ensures that end-users can charge a wide range of devices, enhancing the product's appeal.`}
              </li>
              <li>
                <span className="font-semibold">
                  4. Compact and Portable Design:
                </span>
                {` Designed for on-the-go use, FlaminGO Chargers are lightweight and compact, making them convenient for daily commutes, travel, or outdoor activities. Their portability adds to their practicality, making them a must-have accessory for modern consumers.`}
              </li>
            </ol>
          </div>
        </section>
        <section className="p-6">
          <h2 className="font-bold text-3xl">
            Customization Options for Wholesale Orders
          </h2>
          <div className="my-2">
            <ul>
              <li>
                <span className="font-semibold">Packaging:</span>
                {` Businesses can opt for custom bags or boxes that align with their brand's aesthetics, ensuring a cohesive unboxing experience for customers.`}
              </li>
              <li>
                <span className="font-semibold">Color Choices:</span>
                {` FlaminGO offers flexibility in color selection, allowing businesses to match the chargers with their brand colors, enhancing brand recognition. `}
              </li>
              <li>
                <span className="font-semibold">Direct Logo Printing:</span>
                {` High-quality printing of logos directly on the chargers ensures brand visibility and reinforces brand identity with every use.`}
              </li>
            </ul>
          </div>
        </section>
        <section className="p-6">
          <h2 className="font-bold text-3xl">Order Details</h2>
          <div className="my-2">
            <ul>
              <li>
                <span className="font-semibold">Minimum Bulk Order:</span>
                {` A minimum order of 500 chargers is required for wholesale purchases, making it suitable for businesses of various sizes.`}
              </li>
              <li>
                <span className="font-semibold">Shipping:</span>
                {` FlaminGO provides worldwide shipping with customizable options, ensuring timely delivery to meet business needs.`}
              </li>
              <li>
                <span className="font-semibold">Payment Terms:</span>
                {` Flexible payment terms are available based on order quantity, accommodating the financial planning of businesses.`}
              </li>
            </ul>
          </div>
        </section>
        <section className="px-6">
          <h2 className="font-bold text-3xl">
            Why Partner with FlaminGO Charger?
          </h2>
          <div className="my-2">
            <ul>
              <li>
                <span className="font-semibold">Safety Assurance:</span>
                {` FlaminGO Chargers are lab-certified for safety, providing businesses and consumers with confidence in the product's quality and reliability.`}
              </li>
              <li>
                <span className="font-semibold">Versatile Charging:</span>
                {` With the capability to charge various devices, including phones, vape pens, and earbuds, FlaminGO Chargers cater to a broad audience.`}
              </li>
              <li>
                <span className="font-semibold">
                  Idea for Gifting and Events:
                </span>
                {` The customizable nature of FlaminGO Chargers makes them perfect for corporate gifting, promotional events, and giveaways, enhancing brand visibility and engagement.`}
              </li>
            </ul>
          </div>
        </section>
        <section className="px-6">
          <h2 className="font-bold text-3xl">How to Place a Wholesale Order</h2>
          <div className="my-2">
            <ol>
              <li>
                <span className="font-semibold">
                  Contact FlaminGO Sales Team:
                </span>
                {` Reach out through the wholesale contact form on the official website to initiate discussions about your wholesale needs.`}
              </li>
              <li>
                <span className="font-semibold">
                  Discuss Customization Requirements:
                </span>
                {` Engage with the sales team to finalize customization options, including packaging, colors, and logo placement.`}
              </li>
              <li>
                <span className="font-semibold">Confirm Order Details:</span>
                {` Review and confirm order quantities, shipping details, and payment terms to ensure a smooth transaction.`}
              </li>
              <li>
                <span className="font-semibold">Receive and Distribute:</span>
                {` Once the order is fulfilled, distribute the chargers to your customers, enhancing their experience with your brand.`}
              </li>
            </ol>
          </div>
        </section>
        <section className="px-6">
          <h2 className="font-bold text-3xl">Conclusion</h2>
          <div className="my-2">
            {`Integrating FlaminGO Chargers into your product offerings not only provides a valuable service to your customers but also strengthens your brand's presence in a competitive market. With customization options, proven demand, and a product that combines safety with versatility, FlaminGO Chargers present a compelling wholesale opportunity for businesses aiming to enhance their customer experience and brand recognition.`}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
