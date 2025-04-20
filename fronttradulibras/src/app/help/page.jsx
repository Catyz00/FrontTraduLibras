import { HelpForm } from '@/components/help/help-form';

export default function HelpPage() {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-[#3B3F46]">
      <div className="w-full max-w-sm md:max-w-3xl">
        <HelpForm />
      </div>
    </div>
  );
}
