"use client";

import { useState } from "react";
import Link from "next/link";
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
import { useToast } from "@/hooks/use-toast";

const stepOneSchema = z.object({
  phoneNumber: z.string().regex(/^07\d{8}$/, {
    message: "Must be a valid 10-digit Rwandan phone number, e.g., 07...",
  }),
  rwandanId: z.string().regex(/^[12]\d{15}$/, {
    message: "Must be a valid 16-digit Rwandan ID number.",
  }),
});

const stepTwoSchema = z.object({
  verificationCode: z.string().length(6, {
    message: "Verification code must be 6 digits.",
  }),
});

type StepOneValues = z.infer<typeof stepOneSchema>;

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<StepOneValues | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const stepOneForm = useForm<StepOneValues>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      phoneNumber: "",
      rwandanId: "",
    },
  });

  const stepTwoForm = useForm<z.infer<typeof stepTwoSchema>>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  function handleStepOneSubmit(values: StepOneValues) {
    // In a real app, you'd call an API to send the verification code
    console.log("Sending verification code to:", values.phoneNumber);
    toast({
      title: "Verification Code Sent",
      description: `A 6-digit code has been sent to ${values.phoneNumber}.`,
    });
    setFormData(values);
    setStep(2);
  }

  function handleStepTwoSubmit(values: z.infer<typeof stepTwoSchema>) {
    // In a real app, you'd verify the code with your backend
    console.log("Verifying code:", values.verificationCode, "for user:", formData);
     toast({
      title: "Account Created!",
      description: "You have successfully created your account.",
    });
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      {step === 1 && (
        <>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details to create your account
            </p>
          </div>
          <Form {...stepOneForm}>
            <form
              onSubmit={stepOneForm.handleSubmit(handleStepOneSubmit)}
              className="grid gap-4"
            >
              <FormField
                control={stepOneForm.control}
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
                control={stepOneForm.control}
                name="rwandanId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rwandan ID Card</FormLabel>
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
                Continue
              </Button>
            </form>
          </Form>
           <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </>
      )}

      {step === 2 && formData && (
        <>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Verify Your Phone</h1>
            <p className="text-balance text-muted-foreground">
              Enter the 6-digit code sent to {formData.phoneNumber}
            </p>
          </div>
          <Form {...stepTwoForm}>
            <form
              onSubmit={stepTwoForm.handleSubmit(handleStepTwoSubmit)}
              className="grid gap-4"
            >
              <FormField
                control={stepTwoForm.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123456"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Verify & Create Account
              </Button>
               <Button variant="outline" onClick={() => setStep(1)}>
                  Go Back
                </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
