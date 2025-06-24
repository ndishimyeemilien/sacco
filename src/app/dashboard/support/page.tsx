import NewTicketDialog from "@/components/support/new-ticket-dialog";
import SupportTicketsTable from "@/components/support/support-tickets-table";

export default function SupportPage() {
    return (
      <>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl font-headline">Support Center</h1>
          <NewTicketDialog />
        </div>
        <div className="flex flex-1 rounded-lg" >
          <SupportTicketsTable />
        </div>
      </>
    );
  }
