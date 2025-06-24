
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, User, Phone, BadgeInfo, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { users } from "../page";
import UserTransactionHistory from "@/components/admin/user-transaction-history";
import { useLanguage } from "@/context/language-context";

export default function UserDetailPage() {
  const params = useParams();
  const { userId } = params;
  const { t } = useLanguage();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
          <Link href="/admin/users">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-lg font-semibold md:text-2xl font-headline">
          {user.name}
        </h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t('admin.users.details.title')}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{user.name}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center">
              <BadgeInfo className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{user.idCard}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{t('admin.dashboard.recentUsers.joinedOn', { date: user.joined })}</span>
            </div>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2">
            <UserTransactionHistory user={user} />
        </div>
      </div>
    </div>
  );
}
