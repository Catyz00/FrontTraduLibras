'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function HelpForm() {

  return (
    <div className="flex flex-col gap-6 text-xs">
        <Card className="overflow-hidden p-0 bg-[#f3f3f3] border border-[#3B3F46]/30 shadow-2xl">
        <p>Como faço para redefinir minha senha</p>

        </Card>
    </div>
  );
}
