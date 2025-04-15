import * as React from 'react';
import { useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  BarChart2,
  Settings,
  MessageSquare,
  BookOpen,
  Lightbulb,
  Compass,
  BadgeAlert,
  LogOut,
} from 'lucide-react';

export function AppSidebar({ className }) {
  const { open } = useSidebar();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-background ${
        className || ''
      }`}
    >
      <div className="p-4">
      <Link href="/home" className="flex items-center justify-start">
  {open ? (
    <div className="flex items-center space-x-2">
      <Image
        src="/images/logo/icon.png"
        alt="TraduLibras Logo"
        width={28}
        height={28}
        className="rounded-full"
      />
      <h2 className="text-lg font-semibold text-[#004369]">
        Tradulibras
      </h2>
    </div>
  ) : (
    <div className="flex items-center justify-center w-full">
      <Image
        src="/images/logo/icon.png"
        alt="TraduLibras Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  )}
</Link>

      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="flex flex-col gap-1 px-2 text-[#3B3F46]">
          <SidebarItem
            href="/translator"
            icon={<MessageSquare />}
            label="Tradução"
            open={open}
          />
          <SidebarItem
            href="/suggestions"
            icon={<Lightbulb />}
            label="Sugestões"
            open={open}
          />
          <SidebarItem
            href="/learn"
            icon={<BookOpen />}
            label="Cursos"
            open={open}
          />

          <br />
          <SidebarItem
            href="/about"
            icon={<Compass />}
            label="Sobre"
            open={open}
          />
          <SidebarItem
            href="/help"
            icon={<BadgeAlert />}
            label="Ajuda"
            open={open}
          />
          <SidebarItem
            href="/exit"
            icon={<LogOut />}
            label="Sair"
            open={open}
          />
        </ul>
      </nav>
    </div>
  );
}

function SidebarItem({ href, icon, label, open }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-[#A3C8FF]/20 hover:text-foreground transition-colors duration-200"
      >
        <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
        {open && <span>{label}</span>}
      </Link>
    </li>
  );
}
