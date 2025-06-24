
"use client";
import { Button } from "@/components/ui/button";
import DashboardCards from "@/components/dashboard/dashboard-cards";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import AccountChart from "@/components/dashboard/account-chart";
import { PlusCircle } from "lucide-react";
import Link from 'next/link';
import { useLanguage } from "@/context/language-context";

export default function DashboardPage() {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('dashboard.pageTitle')}</h1>
        <div className="flex items-center gap-2">
            <Link href="/dashboard/withdraw">
                <Button size="sm" variant="outline">{t('dashboard.withdrawFunds')}</Button>
            </Link>
            <Link href="/dashboard/loans">
                <Button size="sm">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    {t('dashboard.applyForLoan')}
                </Button>
            </Link>
        </div>
      </div>
      <div className="flex flex-1 rounded-lg" >
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
            <DashboardCards />
            <div className="grid gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <RecentTransactions />
                </div>
                <div className="lg:col-span-3">
                    <AccountChart />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
