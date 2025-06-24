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

const loans = [
    { id: 'loan_1', requested_at: '2024-07-15', amount: 'RWF 500,000', months: 12, status: 'Approved' },
    { id: 'loan_2', requested_at: '2024-05-20', amount: 'RWF 200,000', months: 6, status: 'Rejected' },
    { id: 'loan_3', requested_at: '2024-07-18', amount: 'RWF 1,000,000', months: 24, status: 'Pending' },
    { id: 'loan_4', requested_at: '2023-12-01', amount: 'RWF 300,000', months: 12, status: 'Paid Off' },
];

const getBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
        case 'approved':
            return 'default';
        case 'pending':
            return 'secondary';
        case 'rejected':
            return 'destructive';
        case 'paid off':
            return 'outline';
        default:
            return 'secondary';
    }
}

export default function LoansTable() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Loan History</CardTitle>
                <CardDescription>A list of your loan applications and their status.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date Requested</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Term</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loans.map(loan => (
                            <TableRow key={loan.id}>
                                <TableCell className="hidden sm:table-cell">{loan.requested_at}</TableCell>
                                <TableCell className="font-medium">{loan.amount}</TableCell>
                                <TableCell>{loan.months} months</TableCell>
                                <TableCell>
                                    <Badge variant={getBadgeVariant(loan.status)}>{loan.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    {loan.status === 'Approved' && (
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
