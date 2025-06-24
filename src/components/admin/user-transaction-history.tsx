
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

type User = {
  id: string;
  name: string;
};

const transactions = [
    { id: 'txn_1', userId: 'usr_1', date: '2024-07-21', description: 'Admin Deposit', amount: '+ RWF 50,000', type: 'Deposit' },
    { id: 'txn_2', userId: 'usr_2', date: '2024-07-20', description: 'Loan Disbursement', amount: '+ RWF 200,000', type: 'Loan' },
    { id: 'txn_3', userId: 'usr_1', date: '2024-07-19', description: 'Loan Repayment', amount: '- RWF 15,000', type: 'Repayment' },
    { id: 'txn_4', userId: 'usr_3', date: '2024-07-18', description: 'Admin Withdrawal', amount: '- RWF 30,000', type: 'Withdrawal' },
    { id: 'txn_5', userId: 'usr_5', date: '2024-07-15', description: 'Loan Disbursement', amount: '+ RWF 500,000', type: 'Loan' },
    { id: 'txn_6', userId: 'usr_5', date: '2024-07-14', description: 'Monthly Savings Deposit', amount: '+ RWF 25,000', type: 'Deposit' },
    { id: 'txn_7', userId: 'usr_5', date: '2024-07-10', description: 'Withdrawal - MTN MoMo', amount: '- RWF 10,000', type: 'Withdrawal' },
];

const getBadgeVariant = (type: string) => {
    switch (type) {
        case 'Deposit': return 'secondary';
        case 'Loan': return 'default';
        case 'Withdrawal': return 'destructive';
        case 'Repayment': return 'outline';
        default: return 'secondary';
    }
}

export default function UserTransactionHistory({ user }: { user: User }) {
    const { t } = useLanguage();
    const userTransactions = transactions.filter(tx => tx.userId === user.id);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('admin.users.transactions.title')}</CardTitle>
                <CardDescription>{t('admin.users.transactions.description', { name: user.name })}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('common.date')}</TableHead>
                            <TableHead>{t('admin.users.transactions.descriptionHeader')}</TableHead>
                            <TableHead>{t('admin.users.transactions.type')}</TableHead>
                            <TableHead className="text-right">{t('common.amount')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userTransactions.length > 0 ? (
                            userTransactions.map(tx => (
                                <TableRow key={tx.id}>
                                    <TableCell className="hidden sm:table-cell">{tx.date}</TableCell>
                                    <TableCell>
                                        <div className="font-medium">{tx.description}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={getBadgeVariant(tx.type)}>{tx.type}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{tx.amount}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">{t('admin.users.transactions.noTransactions')}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
