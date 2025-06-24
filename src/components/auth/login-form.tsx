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
  phoneNumber: z.string().min(1, { message: "This field is required." }),
  rwandanId: z.string(),
}).superRefine((data, ctx) => {
  if (data.phoneNumber.toLowerCase() === '{saccomoney}') {
    // Admin login, rwandanId is not required to be validated
    return;
  }

  // Regular user login
  if (!/^07\d{8}$/.test(data.phoneNumber)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['phoneNumber'],
      message: "Must be a valid 10-digit Rwandan phone number, e.g., 07...",
    });
  }
  if (!/^[12]\d{15}$/.test(data.rwandanId)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['rwandanId'],
      message: "Must be a valid 16-digit Rwandan ID number.",
    });
  }
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

  const phoneNumberValue = form.watch("phoneNumber");
  const isAdminLogin = phoneNumberValue.toLowerCase() === '{saccomoney}';

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // In a real app, you'd verify credentials against a backend
    if (isAdminLogin) {
      console.log("Logging in as Admin");
    } else {
      console.log("Logging in with:", values);
    }
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
                <FormLabel>Phone Number or Admin Code</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="07... or {saccomoney}"
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
                  {!isAdminLogin && (
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your ID?
                    </Link>
                  )}
                </div>
                <FormControl>
                  <Input
                    placeholder="11990..."
                    {...field}
                    disabled={isAdminLogin}
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
