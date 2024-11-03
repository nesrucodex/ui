"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  HeartIcon,
  ImageIcon,
  MessageCircleCodeIcon,
  Navigation2Icon,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const CATAGORIES =
  `works seamlessly with custom Tailwind configurations and because its just a Prettier plugin it works anywhere Prettier works means that any classes in the base layer will be sorted first followed by classes in the components layer and then finally classes in the utilities laye`
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 5);

const Page = () => {
  const [activeCatagory, setActiveCatagory] = useState(CATAGORIES[0]);

  return (
    <main>
      {/* <Spotlight /> */}
      <section className="flex h-[calc(100dvh-12rem)] flex-col items-center justify-center">
        <h1 className="my-4 max-w-md text-center text-4xl md:max-w-2xl md:text-5xl">
          Find And Rate Your Favorite Projects.
        </h1>
        <p className="max-w-sm text-center text-neutral-400 md:text-lg">
          Post your projects, gain likes, and engage with comments from
          developers like you.
        </p>

        <div className="mt-10">
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
            }}
            className="cursor-pointer rounded-full bg-white px-8 py-3 font-semibold text-black transition duration-700 hover:shadow-[0_0_25px_5px_#ffffff44,0_0_25px_5px_#ffffff44]"
          >
            Explore Now
          </motion.button>
        </div>
      </section>
      <section className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-4 px-4">
        {CATAGORIES.map((catagory, index) => (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: index * 0.2,
              duration: 1,
              type: "spring",
            }}
            key={index}
            onClick={() => setActiveCatagory(catagory)}
            className={cn(
              "cursor-pointer select-none rounded-md border border-white/5 px-4 py-2 capitalize text-neutral-400 transition duration-500 hover:text-white hover:shadow-[0_0_30px_10px_#ffffff22]",
              {
                "bg-white text-black hover:text-black":
                  catagory === activeCatagory,
              },
            )}
          >
            {catagory}
          </motion.p>
        ))}
      </section>
      <section className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

const Card = () => {
  return (
    <div className="rounded-lg border border-white/5 pb-4">
      <div className="mb-4 flex h-[12rem] items-center justify-center rounded-md border border-white/5">
        <ImageIcon size={50} className="opacity-10" />
      </div>
      <section className="px-4">
        <p className="flex items-end gap-2">
          <span className="text-lg font-bold">Amharic converter</span>
          <span className="text-sm text-neutral-400">Libraries</span>
        </p>
        <p className="line-clamp-2 text-neutral-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          dolores perferendis blanditiis quaerat repellat obcaecati vel
          recusandae dolor odit, dolore minus, quod quo nesciunt consequuntur
          nulla doloribus temporibus veritatis. Cumque?
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <HeartIcon size={25} /> <span>10</span>
            </div>
            <div className="flex gap-2">
              <MessageCircleCodeIcon size={25} /> <span>2</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <GitHubLogoIcon height={25} width={25} />
            <Navigation2Icon size={25} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
