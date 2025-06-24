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

const tickets = [
    { id: 'tkt_1', date: '2024-07-18', subject: 'Delayed withdrawal', status: 'Open' },
    { id: 'tkt_2', date: '2024-07-12', subject: 'Question about loan interest', status: 'Closed' },
    { id: 'tkt_3', date: '2024-06-25', subject: 'How to update my profile?', status: 'Closed' },
    { id: 'tkt_4', date: '2024-07-20', subject: 'Login problem on mobile', status: 'Open' },
];

const getBadgeVariant = (status: string) => {
    switch (status) {
        case 'Open':
            return 'default';
        case 'Closed':
            return 'secondary';
        default:
            return 'secondary';
    }
}

export default function SupportTicketsTable() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>My Support Tickets</CardTitle>
                <CardDescription>A list of your support requests.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden sm:table-cell">Date</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
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
                                        View
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
