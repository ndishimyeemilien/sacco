
"use client";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { setLocale } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("fr")}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("rw")}>
          Kinyarwanda
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
