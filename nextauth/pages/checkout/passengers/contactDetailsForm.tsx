import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, SubmitHandler, useForm } from "react-hook-form";
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

interface ChildProps {
  cb: SubmitHandler<ContactDetails>;
}

interface ChildMethods {}

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  phone: z.string().min(1, { message: "Phone must not be empty" }),
  phoneCountry: z
    .string()
    .min(1, { message: "Phone country must not be empty" }),
});

export type ContactDetails = z.infer<typeof formSchema>;
const ChildComponent = forwardRef<ChildMethods, ChildProps>((props, ref) => {
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     // Handle form submission logic here
  //     console.log("Form submitted");
  //   };

  //   useImperativeHandle(ref, () => ({
  //     submitForm() {
  //       if (formRef.current) {
  //         formRef.current.submit();
  //       }
  //     },
  //   }));

  const { cb } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      phoneCountry: "",
    },
  });

  const hiddenButtonRef = useRef<HTMLButtonElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => ({
    submitCallback() {
      if (hiddenButtonRef.current) {
        hiddenButtonRef.current.click();
      }
    },
  }));

  return (
    <div>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(cb)}
          className="space-y-7 mx-auto"
        >
          <div className="grid grid-cols-1  gap-3 md:gap-5 md:grid-cols-2 ">
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
            <button
              type="submit"
              ref={hiddenButtonRef}
              className="hidden"
            ></button>
          </div>
        </form>
      </Form>
    </div>
  );
});

export default ChildComponent;

/*
 export default function ContactDetailsForm({
  submitCallback,
}: {
  submitCallback: SubmitHandler<z.infer<typeof formSchema>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "100",
      phoneCountry: ";lasdfklkd",
    },
  });

 

  return (
    
  );
} 

 */
