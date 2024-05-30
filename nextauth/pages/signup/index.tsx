"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/organisms/container";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("please enter a valid email"),
  password: z
    .string()
    .min(1, "password is required")
    .min(6, "Password should be min 6 characters"),
  username: z
    .string()
    .min(1, "Name is required")
    .min(6, "Name should be min 2 characters"),
});

export default function ProfileForm() {
  const onSubmit = async () => {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <div className="bg-neutral-100 flex-1 ">
      <Container size="default" className="blade-top-padding-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-7 max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid pt-3">
              <Button
                type="submit"
                size="lg"
                className="h-12 text-lg tracking-wider"
              >
                Submit
              </Button>
            </div>

            <div>
              <small className="text-sm font-medium leading-none text-slate-500 text-center px-3 mx-auto block md:w-11/12 ">
                By logging in, you agree to our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="underline font-semibold"
                >
                  Terms & Conditions
                </Link>
                .
              </small>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
}
