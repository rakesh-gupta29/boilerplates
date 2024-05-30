import Container from "@/components/organisms/container";
import React from "react";

const stages = [
  {
    title: "Form type",
  },
  {
    title: "Details",
  },
  {
    title: "Confirmation",
  },
];

export default function FormProgress({ stage }: { stage: number }) {
  stage = stage % stages.length;
  return (
    <Container
      size="default"
      className="blade-top-padding-sm blade-bottom-padding-sm"
    >
      <ol className="items-center sm:flex">
        {stages.map((elem, index: number) => {
          return (
            <li className="relative mb-6 sm:mb-0 flex-1 last:flex-grow-0 last:basis-40">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={` z-10 h-9 w-9 bg flex items-center justify-center bg-primary ${
                      index <= stage
                        ? "bg-primary text-slate-100"
                        : "bg-slate-200 text-primary"
                    } rounded-full ring-0 ring-white
                    dark:bg-blue-900 sm:ring-8 dark:ring-gray-900  text-xl font-bold text-primary shrink-0 `}
                  >
                    {index + 1}
                  </div>
                </div>
                <div
                  className={` ${
                    index === stages.length - 1 ? "hidden" : "sm:flex hidden"
                  } ${
                    index < stage ? "bg-primary" : "bg-slate-200"
                  } w-full h-0.5 `}
                ></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {elem.title}
                </h3>
              </div>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
