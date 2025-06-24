
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
import LoanContractDialog from "./loan-contract-dialog";
import { useLanguage } from "@/context/language-context";

const getBadgeVariant = (status: string, t: (key: string) => string) => {
    if (status === t('loans.status.approved')) return 'default';
    if (status === t('loans.status.pending')) return 'secondary';
    if (status === t('loans.status.rejected')) return 'destructive';
    if (status === t('loans.status.paidOff')) return 'outline';
    return 'secondary';
}

export default function LoansTable() {
    const { t } = useLanguage();

    const loans = [
        { id: 'loan_1', requested_at: '2024-07-15', amount: 'RWF 500,000', months: 12, status: t('loans.status.approved') },
        { id: 'loan_2', requested_at: '2024-05-20', amount: 'RWF 200,000', months: 6, status: t('loans.status.rejected') },
        { id: 'loan_3', requested_at: '2024-07-18', amount: 'RWF 1,000,000', months: 24, status: t('loans.status.pending') },
        { id: 'loan_4', requested_at: '2023-12-01', amount: 'RWF 300,000', months: 12, status: t('loans.status.paidOff') },
    ];

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{t('loans.history')}</CardTitle>
                <CardDescription>{t('loans.historyDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('loans.dateRequested')}</TableHead>
                            <TableHead>{t('common.amount')}</TableHead>
                            <TableHead>{t('loans.term')}</TableHead>
                            <TableHead>{t('common.status')}</TableHead>
                            <TableHead><span className="sr-only">{t('common.actions')}</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loans.map(loan => (
                            <TableRow key={loan.id}>
                                <TableCell className="hidden sm:table-cell">{loan.requested_at}</TableCell>
                                <TableCell className="font-medium">{loan.amount}</TableCell>
                                <TableCell>{loan.months} {t('common.months')}</TableCell>
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
    )
}
