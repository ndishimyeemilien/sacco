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
  import { MoreHorizontal } from "lucide-react";
  
  const users = [
    { id: 'usr_1', name: 'Alice Johnson', phone: '0788111222', idCard: '11990...', joined: '2024-07-21' },
    { id: 'usr_2', name: 'Bob Williams', phone: '0788222333', idCard: '11991...', joined: '2024-07-20' },
    { id: 'usr_3', name: 'Charlie Brown', phone: '0788333444', idCard: '11992...', joined: '2024-07-19' },
    { id: 'usr_4', name: 'Diana Miller', phone: '0788444555', idCard: '11993...', joined: '2024-07-19' },
    { id: 'usr_5', name: 'John Doe', phone: '0788123456', idCard: '1198...', joined: '2024-01-10' },
    { id: 'usr_6', name: 'Jane Smith', phone: '0788654321', idCard: '1197...', joined: '2024-02-15' },
];
  
  export default function AdminUsersPage() {
    return (
      <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Manage Users</h1>
        <Card>
            <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>View, edit, or manage user accounts.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone Number</TableHead>
                        <TableHead className="hidden md:table-cell">Rwandan ID</TableHead>
                        <TableHead className="hidden md:table-cell">Date Joined</TableHead>
                        <TableHead><span className="sr-only">Actions</span></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.idCard}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.joined}</TableCell>
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
  