
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
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function SupportTicketsTable() {
    const { t } = useLanguage();

    const getBadgeVariant = (status: string) => {
        if (status === t('support.status.open')) return 'default';
        if (status === t('support.status.closed')) return 'secondary';
        return 'secondary';
    }

    const tickets = [
        { id: 'tkt_1', date: '2024-07-18', subject: 'Delayed withdrawal', status: t('support.status.open') },
        { id: 'tkt_2', date: '2024-07-12', subject: 'Question about loan interest', status: t('support.status.closed') },
        { id: 'tkt_3', date: '2024-06-25', subject: 'How to update my profile?', status: t('support.status.closed') },
        { id: 'tkt_4', date: '2024-07-20', subject: 'Login problem on mobile', status: t('support.status.open') },
    ];
    
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{t('support.table.title')}</CardTitle>
                <CardDescription>{t('support.table.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden sm:table-cell">{t('common.date')}</TableHead>
                            <TableHead>{t('common.subject')}</TableHead>
                            <TableHead>{t('common.status')}</TableHead>
                            <TableHead><span className="sr-only">{t('common.actions')}</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets.map(ticket => (
                            <TableRow key={ticket.id}>
                                <TableCell className="hidden sm:table-cell">{ticket.date}</TableCell>
                                <TableCell className="font-medium">{ticket.subject}</TableCell>
                                <TableCell>
                                    <Badge variant={getBadgeVariant(ticket.status)}>{ticket.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">
                                        {t('common.view')}
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
