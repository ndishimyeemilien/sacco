
"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { useLanguage } from "@/context/language-context";
  import LoanContractDialog from "@/components/loans/loan-contract-dialog";
  
const getBadgeVariant = (status: string, t: (key: string) => string) => {
    if (status === t('loans.status.approved')) return 'default';
    if (status === t('loans.status.pending')) return 'secondary';
    if (status === t('loans.status.rejected')) return 'destructive';
    if (status === t('loans.status.paidOff')) return 'outline';
    return 'secondary';
}
  
  export default function AdminLoansPage() {
    const { t } = useLanguage();
    const loans = [
        { id: 'loan_1', user: 'John Doe', requested_at: '2024-07-15', amount: 'RWF 500,000', months: 12, status: t('loans.status.approved') },
        { id: 'loan_2', user: 'Jane Smith', requested_at: '2024-05-20', amount: 'RWF 200,000', months: 6, status: t('loans.status.rejected') },
        { id: 'loan_3', user: 'Charlie Brown', requested_at: '2024-07-18', amount: 'RWF 1,000,000', months: 24, status: t('loans.status.pending') },
        { id: 'loan_4', user: 'Diana Miller', requested_at: '2023-12-01', amount: 'RWF 300,000', months: 12, status: t('loans.status.paidOff') },
        { id: 'loan_5', user: 'Kevin Gatera', requested_at: '2024-07-22', amount: 'RWF 750,000', months: 18, status: t('loans.status.approved') },
      ];

    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('admin.loans.pageTitle')}</h1>
            <Card>
                <CardHeader>
                    <CardTitle>{t('admin.loans.cardTitle')}</CardTitle>
                    <CardDescription>{t('admin.loans.cardDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('common.users')}</TableHead>
                            <TableHead className="hidden sm:table-cell">{t('common.date')}</TableHead>
                            <TableHead>{t('common.amount')}</TableHead>
                            <TableHead>{t('common.status')}</TableHead>
                            <TableHead className="text-right">{t('common.actions')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loans.map(loan => (
                            <TableRow key={loan.id}>
                                <TableCell className="font-medium">{loan.user}</TableCell>
                                <TableCell className="hidden sm:table-cell">{loan.requested_at}</TableCell>
                                <TableCell>{loan.amount}</TableCell>
                                <TableCell>
                                    <Badge variant={getBadgeVariant(loan.status, t)}>{loan.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    {loan.status === t('loans.status.approved') && (
                                        <LoanContractDialog loan={loan} />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
      </div>
    );
  }
