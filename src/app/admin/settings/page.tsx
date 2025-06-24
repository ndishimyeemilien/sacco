import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">SACCO Settings</h1>
        <Card>
            <CardHeader>
                <CardTitle>Loan Configuration</CardTitle>
                <CardDescription>Set the global parameters for new loans.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                        <Input id="interest-rate" type="number" defaultValue="12" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="max-loan-amount">Max Loan Amount (RWF)</Label>
                        <Input id="max-loan-amount" type="number" defaultValue="5000000" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="repayment-terms">Default Repayment Terms (Months)</Label>
                    <Input id="repayment-terms" placeholder="e.g., 3, 6, 12, 24" defaultValue="3, 6, 12, 24" />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>Save Settings</Button>
            </CardFooter>
        </Card>
    </div>
  )
}
