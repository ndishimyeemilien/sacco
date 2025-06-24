
"use client";

import { useState } from "react";
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
import { FileText, Download, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

type Loan = {
    id: string;
    requested_at: string;
    amount: string;
    months: number;
    status: string;
}

export default function LoanContractDialog({ loan }: { loan: Loan }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
        const response = await fetch('/api/loans/contract', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loan),
        });

        if (!response.ok) {
            throw new Error('Failed to generate PDF');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `loan-agreement-${loan.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

    } catch (error) {
        console.error("Download failed", error);
        toast({
            title: "Download Failed",
            description: "Could not generate the PDF contract. Please try again later.",
            variant: "destructive",
        });
    } finally {
        setIsDownloading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            {t('loans.contract.button')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('loans.contract.title')}</DialogTitle>
          <DialogDescription>
            {t('loans.contract.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto rounded-md border p-4 my-4 bg-muted">
            <h2 className="text-center font-headline">Loan Agreement</h2>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p>
                This Loan Agreement (&quot;Agreement&quot;) is made between <strong>SACCO Connect</strong> (&quot;Lender&quot;) and <strong>Client Name</strong> (&quot;Borrower&quot;).
            </p>

            <h3 className="font-headline">1. Loan Details</h3>
            <ul>
                <li><strong>Principal Loan Amount:</strong> {loan.amount}</li>
                <li><strong>Loan Term:</strong> {loan.months} months</li>
                <li><strong>Interest Rate:</strong> 12% per annum</li>
                <li><strong>Repayment Start Date:</strong> {new Date(new Date().setMonth(new Date().getMonth()+1)).toLocaleDateString()}</li>
            </ul>

            <h3 className="font-headline">2. Repayment Terms</h3>
            <p>
                The Borrower agrees to repay the loan amount, including principal and interest, in {loan.months} equal monthly installments. Payments are due on the 1st of each month.
            </p>

            <h3 className="font-headline">3. Default</h3>
            <p>
                If the Borrower fails to make a payment by the due date, a late fee of 5% of the overdue amount will be applied. Defaulting on the loan for more than 60 days may result in legal action.
            </p>

            <h3 className="font-headline">4. Signatures</h3>
            <p>By signing below, both parties agree to the terms of this Agreement.</p>

            <div className="mt-8 flex justify-between">
                <div>
                    <p className="border-b border-foreground w-48 mt-8">&nbsp;</p>
                    <p>Borrower (Client Name)</p>
                </div>
                <div>
                    <p className="border-b border-foreground w-48 mt-8">&nbsp;</p>
                    <p>Lender (SACCO Connect Staff)</p>
                </div>
            </div>

        </div>
        <DialogFooter>
          <Button type="button" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            {isDownloading ? t('loans.contract.downloading') : t('loans.contract.download')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
