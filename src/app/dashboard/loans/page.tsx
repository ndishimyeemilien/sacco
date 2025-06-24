import LoanApplicationDialog from "@/components/loans/loan-application-dialog";
import LoansTable from "@/components/loans/loans-table";

export default function LoansPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">My Loans</h1>
        <LoanApplicationDialog />
      </div>
      <div className="flex flex-1 rounded-lg" >
        <LoansTable />
      </div>
    </>
  );
}
