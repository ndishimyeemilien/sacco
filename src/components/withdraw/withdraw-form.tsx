"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CircleDollarSign } from "lucide-react";

export default function WithdrawForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>New Withdrawal</CardTitle>
                <CardDescription>
                    Request a withdrawal to your mobile money account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="amount">Amount (RWF)</Label>
                        <Input id="amount" type="number" placeholder="Enter amount" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="mobile-money">Mobile Money Provider</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select provider" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mtn">MTN MoMo</SelectItem>
                                <SelectItem value="airtel">Airtel Money</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="07..." />
                    </div>
                    <Button type="submit" className="w-full mt-2">
                        <CircleDollarSign className="h-4 w-4 mr-2" />
                        Request Withdrawal
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
