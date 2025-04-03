import { LoginForm } from '@/components/login/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-[#3B3F46]">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
