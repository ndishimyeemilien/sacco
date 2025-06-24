
"use client";
import LoanApplicationDialog from "@/components/loans/loan-application-dialog";
import LoansTable from "@/components/loans/loans-table";
import { useLanguage } from "@/context/language-context";

export default function LoansPage() {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('loans.pageTitle')}</h1>
        <LoanApplicationDialog />
      </div>
      <div className="flex flex-1 rounded-lg" >
        <LoansTable />
      </div>
    </>
  );
}
