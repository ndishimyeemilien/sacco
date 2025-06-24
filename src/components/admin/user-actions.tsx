
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoreHorizontal, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

type User = {
  id: string;
  name: string;
  phone: string;
  idCard: string;
  joined: string;
};

export default function UserActions({ user }: { user: User }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [dialogType, setDialogType] = useState<"deposit" | "withdraw" | null>(null);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleAmountSubmit = () => {
    if (!amount || Number(amount) <= 0) {
      toast({
        title: t('admin.users.actions.invalidAmountTitle'),
        description: t('admin.users.actions.invalidAmountDesc'),
        variant: "destructive",
      });
      return;
    }
    
    console.log(`Sending verification code for ${dialogType} of ${amount} for user ${user.name}`);
    toast({
      title: t('admin.users.actions.codeSentTitle'),
      description: t('admin.users.actions.codeSentDesc'),
    });
    setStep(2);
  };

  const handleVerificationSubmit = () => {
    // In a real app, you would verify this code against a backend service.
    // For this simulation, we'll just check for a 6-digit code.
    if (verificationCode.length !== 6) {
      toast({
        title: t('admin.users.actions.invalidCodeTitle'),
        description: t('admin.users.actions.invalidCodeDesc'),
        variant: "destructive",
      });
      return;
    }

    console.log(`Action: ${dialogType} for user ${user.name}, Amount: ${amount}, Code: ${verificationCode}`);
    const actionTranslation = t(`admin.users.actions.${dialogType!}`);
    toast({
        title: t('admin.users.actions.successTitle'),
        description: t('admin.users.actions.successDesc', { action: actionTranslation, amount: amount, name: user.name }),
    });
    closeDialog();
  };
  
  const closeDialog = () => {
    setDialogType(null);
    setStep(1);
    setAmount("");
    setVerificationCode("");
  };

  const getDialogTitle = () => {
    if (step === 1) {
      return t(dialogType === 'deposit' ? 'admin.users.actions.depositDialogTitle' : 'admin.users.actions.withdrawDialogTitle');
    }
    return t('admin.users.actions.verificationTitle');
  };

  const getDialogDescription = () => {
    if (!dialogType) return "";
    if (step === 1) {
      return t('admin.users.actions.dialogDescription', { action: t(`admin.users.actions.${dialogType}`), name: user.name, phone: user.phone });
    }
    const actionTranslation = t(`admin.users.actions.${dialogType!}`);
    return t('admin.users.actions.verificationDescription', { name: user.name, action: actionTranslation.toLowerCase(), amount: amount });
  };


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t('admin.users.actions.title')}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setDialogType("deposit")}>
            <ArrowUpCircle className="mr-2 h-4 w-4" />
            <span>{t('admin.users.actions.deposit')}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDialogType("withdraw")}>
            <ArrowDownCircle className="mr-2 h-4 w-4" />
            <span>{t('admin.users.actions.withdraw')}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={!!dialogType} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{getDialogTitle()}</DialogTitle>
            <DialogDescription>{getDialogDescription()}</DialogDescription>
          </DialogHeader>
          
          {step === 1 && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  {t('admin.users.actions.amountLabel')}
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={t('admin.users.actions.amountPlaceholder')}
                  className="col-span-3"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  {t('admin.users.actions.verificationCodeLabel')}
                </Label>
                <Input
                  id="code"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder={t('admin.users.actions.verificationCodePlaceholder')}
                  className="col-span-3"
                  maxLength={6}
                />
              </div>
            </div>
          )}

          <DialogFooter>
            {step === 1 && (
              <>
                <Button variant="outline" onClick={closeDialog}>{t('common.cancel')}</Button>
                <Button type="submit" onClick={handleAmountSubmit}>{t('admin.users.actions.continueButton')}</Button>
              </>
            )}
             {step === 2 && (
              <>
                <Button variant="outline" onClick={() => setStep(1)}>{t('signup.goBackButton')}</Button>
                <Button type="submit" onClick={handleVerificationSubmit}>{t('common.submit')}</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
