'use client';

import { useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Navbar() {
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
        {/* <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
