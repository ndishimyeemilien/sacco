
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/context/language-context";

export default function LoanApplicationDialog() {
  const { t } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          {t('loans.apply')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('loans.application.title')}</DialogTitle>
          <DialogDescription>
            {t('loans.application.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              {t('common.phone')}
            </Label>
            <Input id="phone" type="tel" value="0788123456" className="col-span-3" disabled />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              {t('loans.application.amountLabel')}
            </Label>
            <Input id="amount" type="number" defaultValue="100000" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="repayment" className="text-right">
              {t('loans.application.repaymentLabel')}
            </Label>
            <Select>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={t('loans.application.repaymentPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="3">{t('loans.application.repayment3')}</SelectItem>
                    <SelectItem value="6">{t('loans.application.repayment6')}</SelectItem>
                    <SelectItem value="12">{t('loans.application.repayment12')}</SelectItem>
                    <SelectItem value="24">{t('loans.application.repayment24')}</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{t('loans.application.submit')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
