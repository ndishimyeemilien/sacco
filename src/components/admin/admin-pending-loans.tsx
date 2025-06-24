
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
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const pendingLoans = [
    { id: 'loan_3', user: 'John Doe', requested_at: '2024-07-18', amount: 'RWF 1,000,000', months: 24 },
    { id: 'loan_5', user: 'Jane Smith', requested_at: '2024-07-20', amount: 'RWF 350,000', months: 12 },
    { id: 'loan_6', user: 'Peter Jones', requested_at: '2024-07-21', amount: 'RWF 800,000', months: 6 },
];


export default function AdminPendingLoans() {
    const { t } = useLanguage();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('admin.dashboard.pendingLoans.title')}</CardTitle>
                <CardDescription>{t('admin.dashboard.pendingLoans.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('common.users')}</TableHead>
                            <TableHead>{t('common.amount')}</TableHead>
                            <TableHead className="text-right">{t('common.actions')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pendingLoans.map(loan => (
                            <TableRow key={loan.id}>
                                <TableCell>
                                    <div className="font-medium">{loan.user}</div>
                                    <div className="text-xs text-muted-foreground">{loan.requested_at}</div>
                                </TableCell>
                                <TableCell>{loan.amount}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex gap-2 justify-end">
                                        <Button variant="outline" size="icon" className="h-8 w-8 bg-green-50 hover:bg-green-100">
                                            <Check className="h-4 w-4 text-green-600" />
                                        </Button>
                                         <Button variant="outline" size="icon" className="h-8 w-8 bg-red-50 hover:bg-red-100">
                                            <X className="h-4 w-4 text-red-600" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
