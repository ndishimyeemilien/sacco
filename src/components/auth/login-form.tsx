"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation";
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

const loginSchema = z.object({
  phoneNumber: z.string().regex(/^07\d{8}$/, {
    message: "Must be a valid 10-digit Rwandan phone number, e.g., 07...",
  }),
  rwandanId: z.string().regex(/^[12]\d{15}$/, {
    message: "Must be a valid 16-digit Rwandan ID number.",
  }),
});

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "",
      rwandanId: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // In a real app, you'd verify credentials against a backend
    console.log("Logging in with:", values);
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold font-headline">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your phone number and ID to login
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="07..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="rwandanId"
            render={({ field }) => (
              <FormItem>
                 <div className="flex items-center">
                  <FormLabel>Rwandan ID Card</FormLabel>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your ID?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    placeholder="11990..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
