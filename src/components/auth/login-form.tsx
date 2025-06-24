
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
import { useLanguage } from '@/context/language-context';

const loginSchema = z.object({
  phoneNumber: z.string().min(1, { message: "This field is required." }),
  rwandanId: z.string(),
}).superRefine((data, ctx) => {
  if (data.phoneNumber.toLowerCase() === '{saccomoney}') {
    return;
  }
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
  const { t } = useLanguage();

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
    if (isAdminLogin) {
      console.log("Logging in as Admin");
      router.push("/admin/dashboard");
    } else {
      console.log("Logging in with:", values);
      router.push("/dashboard");
    }
  }

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold font-headline">{t('login.title')}</h1>
        <p className="text-balance text-muted-foreground">
          {t('login.description')}
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
                <FormLabel>{t('login.phoneLabel')}</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={t('login.phonePlaceholder')}
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
                  <FormLabel>{t('login.idLabel')}</FormLabel>
                  {!isAdminLogin && (
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      {t('login.forgotId')}
                    </Link>
                  )}
                </div>
                <FormControl>
                  <Input
                    placeholder={t('login.idPlaceholder')}
                    {...field}
                    disabled={isAdminLogin}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {t('login.loginButton')}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        {t('login.signupPrompt')}{" "}
        <Link href="/signup" className="underline">
          {t('common.signup')}
        </Link>
      </div>
    </div>
  );
}
