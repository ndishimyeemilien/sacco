
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/context/language-context";


const recentUsers = [
    { id: 'usr_1', name: 'Alice Johnson', joined: '2024-07-21', initial: 'AJ' },
    { id: 'usr_2', name: 'Bob Williams', joined: '2024-07-20', initial: 'BW' },
    { id: 'usr_3', name: 'Charlie Brown', joined: '2024-07-19', initial: 'CB' },
    { id: 'usr_4', name: 'Diana Miller', joined: '2024-07-19', initial: 'DM' },
];


export default function AdminRecentUsers() {
    const { t } = useLanguage();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('admin.dashboard.recentUsers.title')}</CardTitle>
                <CardDescription>{t('admin.dashboard.recentUsers.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                {recentUsers.map(user => (
                    <div className="flex items-center" key={user.id}>
                        <Avatar className="h-9 w-9">
                            <AvatarFallback>{user.initial}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{t('admin.dashboard.recentUsers.joinedOn', { date: user.joined })}</p>
                        </div>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
    )
}
