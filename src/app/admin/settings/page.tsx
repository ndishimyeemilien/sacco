
"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/context/language-context";

export default function AdminSettingsPage() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('admin.settings.pageTitle')}</h1>
        <Card>
            <CardHeader>
                <CardTitle>{t('admin.settings.cardTitle')}</CardTitle>
                <CardDescription>{t('admin.settings.cardDescription')}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="interest-rate">{t('admin.settings.interestRate')}</Label>
                        <Input id="interest-rate" type="number" defaultValue="12" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="max-loan-amount">{t('admin.settings.maxLoan')}</Label>
                        <Input id="max-loan-amount" type="number" defaultValue="5000000" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="repayment-terms">{t('admin.settings.repaymentTerms')}</Label>
                    <Input id="repayment-terms" placeholder={t('admin.settings.repaymentPlaceholder')} defaultValue="3, 6, 12, 24" />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>{t('admin.settings.save')}</Button>
            </CardFooter>
        </Card>
    </div>
  )
}
