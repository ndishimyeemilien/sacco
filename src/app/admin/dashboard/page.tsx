import AdminStatsCards from "@/components/admin/admin-stats-cards";
import AdminPendingLoans from "@/components/admin/admin-pending-loans";
import AdminRecentUsers from "@/components/admin/admin-recent-users";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Admin Dashboard</h1>
        <AdminStatsCards />
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2">
            <AdminPendingLoans />
            <AdminRecentUsers />
        </div>
    </div>
  );
}
