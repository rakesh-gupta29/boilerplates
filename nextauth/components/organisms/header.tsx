"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/organisms/container";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ModuleChip } from "../ui/chips";
import { FlashlightIcon } from "lucide-react";

interface Props {
  withOptions?: boolean;
}

export default function Header({ withOptions = true }: Props) {
  const router = useRouter();

  return (
    <header className="header-wrapper flex-0 sticky top-0 left-0 right-0 h-40">
      {/* <Container size="default">
        <nav className="pt-7 pb-5 flex justify-between gap-8">
          <Link href="/" className="relative h-12 basis-60">
            <Image
              src="/images/logo.svg"
              alt="logo for nextauth-boilerplate"
              objectFit="contain"
              objectPosition="center"
              layout="fill"
            />
          </Link>
          <div className="flex-1 flex items-center justify-end gap-7">
            <Button
              onClick={() => alert("make a call on helpline number")}
              type="button"
              size="icon"
              variant="outline"
            >
              <Image
                height={24}
                width={24}
                alt="headset icon"
                src="/icons/headset.svg"
              />
            </Button>

            <Button
              onClick={() => router.push("/login")}
              type="button"
              isCaps
              variant="light"
            >
              Sign In
            </Button>

            <Button
              onClick={() => router.push("/signup")}
              type="button"
              isCaps
              variant="light"
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </Container> */}
      <div className="flex gap-5">
        <ModuleChip
          onClick={() => router.push("/")}
          chipType="active"
          variant="light"
          className="flex items-center gap-x-3"
        >
          <Image
            alt="icon for flghts"
            src="/icons/flights.svg"
            height={20}
            width={20}
            loading="lazy"
          />
          Flights
        </ModuleChip>

        <ModuleChip
          onClick={() => router.push("/trains")}
          chipType="upcoming"
          variant="light"
          className="flex items-center gap-x-3"
        >
          <Image
            alt="icon for flghts"
            src="/icons/train.svg"
            height={20}
            width={20}
            loading="lazy"
          />
          Trains
        </ModuleChip>

        <ModuleChip
          onClick={() => router.push("/visa-assistance")}
          chipType="upcoming"
          variant="light"
          className="flex items-center gap-x-3"
        >
          <Image
            alt="icon for flghts"
            src="/icons/flights.svg"
            height={20}
            width={20}
            loading="lazy"
          />
          Global Visa Assistance
        </ModuleChip>
      </div>
    </header>
  );
}
