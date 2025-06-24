
"use client";

import Link from "next/link";
import {
  LayoutGrid,
  Users,
  Landmark,
  Settings,
  Menu,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/admin/dashboard", icon: LayoutGrid, label: t('common.dashboard') },
    { href: "/admin/users", icon: Users, label: t('common.users') },
    { href: "/admin/loans", icon: Landmark, label: t('common.loans') },
    { href: "/admin/settings", icon: Settings, label: t('common.settings') },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 60 60"
                className="h-7 w-7"
              >
                <path d="M 5,55 A 30 30 0 0 1 55 55 A 35 35 0 0 0 5 55 Z" fill="#60a5fa" />
                <path d="M 20 40 C 22 25 30 25 32 35 L 35 30 L 30 27 L 27 32 C 26 30 22 30 20 40 Z" fill="#fbbf24" />
                <path d="M 30 45 C 32 30 40 30 42 40 L 45 35 L 40 32 L 37 37 C 36 35 32 35 30 45 Z" fill="#facc15" />
                <path d="M 40 50 C 42 35 50 35 52 45 L 55 40 L 50 37 L 47 42 C 46 40 42 40 40 50 Z" fill="#fde047" />
              </svg>
              <span className="font-headline">{t('common.adminAppName')}</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname.startsWith(item.href) && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 60 60"
                    className="h-7 w-7"
                  >
                    <path d="M 5,55 A 30 30 0 0 1 55 55 A 35 35 0 0 0 5 55 Z" fill="#60a5fa" />
                    <path d="M 20 40 C 22 25 30 25 32 35 L 35 30 L 30 27 L 27 32 C 26 30 22 30 20 40 Z" fill="#fbbf24" />
                    <path d="M 30 45 C 32 30 40 30 42 40 L 45 35 L 40 32 L 37 37 C 36 35 32 35 30 45 Z" fill="#facc15" />
                    <path d="M 40 50 C 42 35 50 35 52 45 L 55 40 L 50 37 L 47 42 C 46 40 42 40 40 50 Z" fill="#fde047" />
                  </svg>
                  <span className="font-headline">{t('common.adminAppName')}</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                       pathname.startsWith(item.href) && "bg-muted text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Can add a search bar here if needed */}
          </div>
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('admin.dashboard.layout.account')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t('common.profile')}</DropdownMenuItem>
              <DropdownMenuItem>{t('common.settings')}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">{t('common.logout')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
