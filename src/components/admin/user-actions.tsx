
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
  const [amount, setAmount] = useState("");

  const handleAction = () => {
    if (!amount || Number(amount) <= 0) {
      toast({
        title: t('admin.users.actions.invalidAmountTitle'),
        description: t('admin.users.actions.invalidAmountDesc'),
        variant: "destructive",
      });
      return;
    }
    
    console.log(`Action: ${dialogType} for user ${user.name}, Amount: ${amount}`);
    const actionTranslation = t(`admin.users.actions.${dialogType!}`);
    toast({
        title: t('admin.users.actions.successTitle'),
        description: t('admin.users.actions.successDesc', { action: actionTranslation, amount: amount, name: user.name }),
    });
    setDialogType(null);
    setAmount("");
  };
  
  const dialogTitle = t(dialogType === 'deposit' ? 'admin.users.actions.depositDialogTitle' : 'admin.users.actions.withdrawDialogTitle');
  const dialogDescription = dialogType ? t('admin.users.actions.dialogDescription', { action: t(`admin.users.actions.${dialogType}`), name: user.name, phone: user.phone }) : "";


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

      <Dialog open={!!dialogType} onOpenChange={(open) => !open && setDialogType(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogType(null)}>{t('common.cancel')}</Button>
            <Button type="submit" onClick={handleAction}>{t('common.submit')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
