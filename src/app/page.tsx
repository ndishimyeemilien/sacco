
"use client";

import LoginForm from '@/components/auth/login-form';
import { useLanguage } from '@/context/language-context';

export default function LoginPage() {
  const { t } = useLanguage();
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="flex h-full w-full items-center justify-center p-10" style={{background: 'hsl(var(--primary))'}}>
          <div className="text-center text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 60 60"
              className="mx-auto h-24 w-24"
            >
              <path d="M 5,55 A 30 30 0 0 1 55 55 A 35 35 0 0 0 5 55 Z" fill="#60a5fa" />
              <path d="M 20 40 C 22 25 30 25 32 35 L 35 30 L 30 27 L 27 32 C 26 30 22 30 20 40 Z" fill="#fbbf24" />
              <path d="M 30 45 C 32 30 40 30 42 40 L 45 35 L 40 32 L 37 37 C 36 35 32 35 30 45 Z" fill="#facc15" />
              <path d="M 40 50 C 42 35 50 35 52 45 L 55 40 L 50 37 L 47 42 C 46 40 42 40 40 50 Z" fill="#fde047" />
            </svg>
            <h2 className="mt-6 text-4xl font-bold font-headline">
              {t('common.appName')}
            </h2>
            <p className="mt-2 text-lg text-white/80">
              {t('common.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
