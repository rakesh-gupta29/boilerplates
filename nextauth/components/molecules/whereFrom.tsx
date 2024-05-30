"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";

const whereFrom = {
  type: "AIRPORT",
  name: "Pune International Airport",
  code: "PNQ",
  city: "PNQ",
  cityName: "Pune",
  regionName: "Maharashtra",
  country: "IN",
  countryName: "India",
  countryNameShort: "India",
  photoUri:
    "https://q-xx.bstatic.com/xdata/images/city/square60/684822.jpg?k=8e3dfdbe7474b16f993bead046bb1d3d329cdd68c6aee6ec72c8e935ba426a9f&o=",
  distanceToCity: {
    value: 9.8281908330825,
    unit: "km",
  },
  parent: "PNQ",
};

export default function WhereFrom() {
  const [whereFrom, setWhereFrom] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [results, setResults] = useState(null);
  const [isOptions, setOptions] = useState(false);

  const fetchAirport = useCallback(
    debounce((text) => {
      setLoading(true);
      fetch("").finally(() => {
        setLoading(false);
        setOptions(true);
      });
    }, 300),
    []
  );

  const updateWhereFrom = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWhereFrom(value);
    fetchAirport(value);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger className=" d relative w-full">Open</PopoverTrigger>
        <PopoverContent className="w-full d overflow-hidden  left-10 right-10  max-w-full whitespace-normal">
          <div>
            Place content for the popover here. Place content for the popover
            here. Place content for the popover here. Place content for the
            popover here. Place content for the popover here. Place content for
            the popover here. Place content for the popover here. Place content
            for the popover here.
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex flex-col gap-2">
        <label
          className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
          htmlFor="where_from"
        >
          Where from
        </label>
        <Input
          onChange={updateWhereFrom}
          className="py-7 pl-3"
          id="where_from"
          placeholder="Enter your password"
          value={whereFrom}
        />
      </div>
    </>
  );
}
