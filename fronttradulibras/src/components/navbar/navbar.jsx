'use client';

import { useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Navbar({children}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <SidebarProvider defaultOpen={false} open={isHovering}>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="transition-all duration-300"
      >
        <AppSidebar
          className={`${
            isHovering ? 'w-64' : 'w-16'
          } transition-width duration-300`}
        />
      </div>
      <SidebarInset
        className={`ml-${
          isHovering ? '64' : '16'
        } transition-margin duration-300`}
      >
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
