
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

export default function RecentTransactions() {
    const { t } = useLanguage();

    const transactions = [
        { id: 'txn_1', date: '2024-07-15', description: t('dashboard.transactions.loanDisbursement'), amount: '+ RWF 500,000', type: t('dashboard.transactions.deposit') },
        { id: 'txn_2', date: '2024-07-14', description: t('dashboard.transactions.savingsDeposit'), amount: '+ RWF 25,000', type: t('dashboard.transactions.deposit') },
        { id: 'txn_3', date: '2024-07-10', description: t('dashboard.transactions.withdrawalMomo'), amount: '- RWF 10,000', type: t('dashboard.transactions.withdrawal') },
        { id: 'txn_4', date: '2024-06-30', description: t('dashboard.transactions.loanRepayment'), amount: '- RWF 55,000', type: t('dashboard.transactions.withdrawal') },
        { id: 'txn_5', date: '2024-06-14', description: t('dashboard.transactions.savingsDeposit'), amount: '+ RWF 25,000', type: t('dashboard.transactions.deposit') },
        { id: 'txn_6', date: '2024-06-10', description: t('dashboard.transactions.withdrawalAirtel'), amount: '- RWF 20,000', type: t('dashboard.transactions.withdrawal') },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('dashboard.transactions.title')}</CardTitle>
                <CardDescription>{t('dashboard.transactions.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('dashboard.transactions.descHeader')}</TableHead>
                            <TableHead className="hidden md:table-cell">{t('dashboard.transactions.type')}</TableHead>
                            <TableHead className="hidden sm:table-cell">{t('common.date')}</TableHead>
                            <TableHead className="text-right">{t('common.amount')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map(tx => (
                            <TableRow key={tx.id}>
                                <TableCell>
                                    <div className="font-medium">{tx.description}</div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Badge variant={tx.type === t('dashboard.transactions.deposit') ? 'secondary' : 'outline'}>{tx.type}</Badge>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{tx.date}</TableCell>
                                <TableCell className="text-right">{tx.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
