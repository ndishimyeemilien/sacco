import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import WithdrawForm from "@/components/withdraw/withdraw-form";

const withdrawals = [
    { id: 'wd_1', date: '2024-07-10', amount: 'RWF 10,000', method: 'MTN MoMo', status: 'Completed' },
    { id: 'wd_2', date: '2024-06-05', amount: 'RWF 5,000', method: 'Airtel Money', status: 'Completed' },
    { id: 'wd_3', date: '2024-07-19', amount: 'RWF 20,000', method: 'MTN MoMo', status: 'Pending' },
    { id: 'wd_4', date: '2024-05-15', amount: 'RWF 15,000', method: 'MTN MoMo', status: 'Failed' },
];

const getBadgeVariant = (status: string) => {
    switch (status) {
        case 'Completed':
            return 'default';
        case 'Pending':
            return 'secondary';
        case 'Failed':
            return 'destructive';
        default:
            return 'secondary';
    }
}

export default function WithdrawPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Withdraw Funds</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <WithdrawForm />
        </div>
        <div className="lg:col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle>Withdrawal History</CardTitle>
                    <CardDescription>Your recent withdrawal requests.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="hidden sm:table-cell">Method</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {withdrawals.map(wd => (
                                <TableRow key={wd.id}>
                                    <TableCell>{wd.date}</TableCell>
                                    <TableCell className="font-medium">{wd.amount}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{wd.method}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={getBadgeVariant(wd.status)}>{wd.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}
