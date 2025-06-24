
"use client";
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
import { useLanguage } from "@/context/language-context";

export default function WithdrawPage() {
  const { t } = useLanguage();

  const getBadgeVariant = (status: string) => {
    if (status === t('withdraw.history.status.completed')) return 'default';
    if (status === t('withdraw.history.status.pending')) return 'secondary';
    if (status === t('withdraw.history.status.failed')) return 'destructive';
    return 'secondary';
  }

  const withdrawals = [
    { id: 'wd_1', date: '2024-07-10', amount: 'RWF 10,000', method: 'MTN MoMo', status: t('withdraw.history.status.completed') },
    { id: 'wd_2', date: '2024-06-05', amount: 'RWF 5,000', method: 'Airtel Money', status: t('withdraw.history.status.completed') },
    { id: 'wd_3', date: '2024-07-19', amount: 'RWF 20,000', method: 'MTN MoMo', status: t('withdraw.history.status.pending') },
    { id: 'wd_4', date: '2024-05-15', amount: 'RWF 15,000', method: 'MTN MoMo', status: t('withdraw.history.status.failed') },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('withdraw.pageTitle')}</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <WithdrawForm />
        </div>
        <div className="lg:col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle>{t('withdraw.history.title')}</CardTitle>
                    <CardDescription>{t('withdraw.history.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t('common.date')}</TableHead>
                                <TableHead>{t('common.amount')}</TableHead>
                                <TableHead className="hidden sm:table-cell">{t('withdraw.history.method')}</TableHead>
                                <TableHead className="text-right">{t('common.status')}</TableHead>
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
