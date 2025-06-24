
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleDollarSign } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function WithdrawForm() {
    const { t } = useLanguage();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('withdraw.form.title')}</CardTitle>
                <CardDescription>
                    {t('withdraw.form.description')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="amount">{t('withdraw.form.amountLabel')}</Label>
                        <Input id="amount" type="number" placeholder={t('withdraw.form.amountPlaceholder')} />
                    </div>
                    <Button type="submit" className="w-full mt-2">
                        <CircleDollarSign className="h-4 w-4 mr-2" />
                        {t('withdraw.form.button')}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
