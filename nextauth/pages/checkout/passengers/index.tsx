"use client";

import React, { useReducer, useRef } from "react";
import FormProgress from "../progress-bar";
import PassengerCard from "./card";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface Detail {
  name: string;
  age: string;
  salutation: string;
  email: string;
  gender: string;
  phone: string;
  phoneCountry: string;
  id: string;
}

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Container from "@/components/organisms/container";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const dummyPassenger = {
  name: "John Doe",
  age: "30",
  salutation: "Mr",
  email: "johndoe@example.com",
  gender: "Male",
  phone: "123-456-7890",
  phoneCountry: "US",
  id: "10",
};

const contactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  phone: z.string().min(1, { message: "Phone must not be empty" }),
  phoneCountry: z
    .string()
    .min(1, { message: "Phone country must not be empty" }),
});

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Name must not be empty" }),
  lastName: z.string().min(1, { message: "Name must not be empty" }),
  age: z.string().min(1, { message: "Age must not be empty" }),
  salutation: z
    .string()
    .min(1)
    .regex(/^(mr|ms)$/i, { message: 'Salutation must be "mr" or "ms"' }),
  email: z.string().email({ message: "Invalid email format" }),
  gender: z
    .string()
    .min(1)
    .regex(/^(male|female|others)$/i, {
      message: 'Gender must be "male", "female", or "others"',
    }),
  phone: z.string().min(1, { message: "Phone must not be empty" }),
  phoneCountry: z
    .string()
    .min(1, { message: "Phone country must not be empty" }),
});

interface ChildMethods {
  submitCallback: () => void;
}

export default function Passengers() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      salutation: "mr",
      email: "something@checking.com",
      gender: "male",
      phone: "100",
      phoneCountry: ";lasdfklkd",
    },
  });

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "something@checking.com",
      phone: "100",
      phoneCountry: ";lasdfklkd",
    },
  });

  const updateDetails = (id: string) => {
    console.log(id);
    toggleModal();
  };

  const [isModal, toggleModal] = useReducer((s) => !s, false);
  const [isContactModal, toggleContactModal] = useReducer((s) => !s, false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log("update the entry of passenger detail");
  };

  const getContactDetails: SubmitHandler<z.infer<typeof contactFormSchema>> = (
    data
  ) => {
    console.log(data);
  };

  const isSigned = false;
  return (
    <>
      <Dialog open={isModal}>
        <DialogContent className="sm:max-w-xl ">
          <DialogHeader className="relative flex-row border-b-[1px] border-solid border-black/30 pb-5 flex items-end justify-between gap-8">
            <span className="font-medium pb-0.5">Edit details</span>
            <button
              type="button"
              onClick={toggleModal}
              className=" bg-slate-300 rounded-full p-1.5  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-5 w-5 stroke-black " />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>

          <div className="min-h-[200px] pt-5 pb-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-7 mx-auto"
              >
                <div className="grid grid-cols-1  gap-3 md:gap-5 md:grid-cols-2 ">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          First/Middle Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            placeholder="Enter your first/middle name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1  gap-3 md:gap-5 md:grid-cols-2 ">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Gender</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="male" defaultChecked>
                                  Male
                                </SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="others">Others</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Age</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            inputMode="numeric"
                            placeholder="Enter your age"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid place-content-end">
                  <Button type="submit">Save changes</Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      <Container size="small">
        {/* <FormProgress stage={1} /> */}

        <div className="grid grid-cols-10 d">
          <div className="col-span-7 ">
            <div className="pt-8">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Passenger's Details
              </h3>
            </div>
          </div>

          <div className="col-span-3  d">ticket details</div>
        </div>
      </Container>

      <Dialog open={!isContactModal}>
        <DialogContent className="sm:max-w-xl ">
          <DialogHeader className="relative flex-row border-b-[1px] border-solid border-black/30 pb-5 flex items-end justify-between gap-8">
            <span className="font-medium pb-0.5">Book as guest</span>
            <button
              type="button"
              onClick={toggleContactModal}
              className=" bg-slate-300 rounded-full p-1.5  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-5 w-5 stroke-black " />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>

          <div className="min-h-[200px] pt-2 pb-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(getContactDetails)}
                className="space-y-5 mx-auto"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid place-content-end">
                  <Button type="submit">Book as guest</Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
