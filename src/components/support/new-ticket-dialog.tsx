
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
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function NewTicketDialog() {
  const { t } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            {t('support.createTicket')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('support.ticket.title')}</DialogTitle>
          <DialogDescription>
            {t('support.ticket.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              {t('common.subject')}
            </Label>
            <Input id="subject" placeholder={t('support.ticket.subjectPlaceholder')} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="message" className="text-right pt-2">
              {t('common.message')}
            </Label>
            <Textarea id="message" placeholder={t('support.ticket.messagePlaceholder')} className="col-span-3" rows={5} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{t('support.ticket.submit')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
