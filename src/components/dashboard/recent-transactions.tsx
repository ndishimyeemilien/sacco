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

const transactions = [
    { id: 'txn_1', date: '2024-07-15', description: 'Loan Disbursement', amount: '+ RWF 500,000', type: 'Deposit' },
    { id: 'txn_2', date: '2024-07-14', description: 'Monthly Savings Deposit', amount: '+ RWF 25,000', type: 'Deposit' },
    { id: 'txn_3', date: '2024-07-10', description: 'Withdrawal - MTN MoMo', amount: '- RWF 10,000', type: 'Withdrawal' },
    { id: 'txn_4', date: '2024-06-30', description: 'Loan Repayment', amount: '- RWF 55,000', type: 'Withdrawal' },
    { id: 'txn_5', date: '2024-06-14', description: 'Monthly Savings Deposit', amount: '+ RWF 25,000', type: 'Deposit' },
    { id: 'txn_6', date: '2024-06-10', description: 'Withdrawal - Airtel Money', amount: '- RWF 20,000', type: 'Withdrawal' },
];

export default function RecentTransactions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>A list of your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead className="hidden md:table-cell">Type</TableHead>
                            <TableHead className="hidden sm:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map(tx => (
                            <TableRow key={tx.id}>
                                <TableCell>
                                    <div className="font-medium">{tx.description}</div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Badge variant={tx.type === 'Deposit' ? 'secondary' : 'outline'}>{tx.type}</Badge>
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
