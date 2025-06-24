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
  import { MoreHorizontal } from "lucide-react";
  
  const loans = [
    { id: 'loan_1', user: 'John Doe', requested_at: '2024-07-15', amount: 'RWF 500,000', status: 'Approved' },
    { id: 'loan_2', user: 'Jane Smith', requested_at: '2024-05-20', amount: 'RWF 200,000', status: 'Rejected' },
    { id: 'loan_3', user: 'Charlie Brown', requested_at: '2024-07-18', amount: 'RWF 1,000,000', status: 'Pending' },
    { id: 'loan_4', user: 'Diana Miller', requested_at: '2023-12-01', amount: 'RWF 300,000', status: 'Paid Off' },
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
  
  export default function AdminLoansPage() {
    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-lg font-semibold md:text-2xl font-headline">Manage Loans</h1>
            <Card>
                <CardHeader>
                    <CardTitle>All Loan Applications</CardTitle>
                    <CardDescription>View and manage all loan applications.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loans.map(loan => (
                            <TableRow key={loan.id}>
                                <TableCell className="font-medium">{loan.user}</TableCell>
                                <TableCell className="hidden sm:table-cell">{loan.requested_at}</TableCell>
                                <TableCell>{loan.amount}</TableCell>
                                <TableCell>
                                    <Badge variant={getBadgeVariant(loan.status)}>{loan.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
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
  