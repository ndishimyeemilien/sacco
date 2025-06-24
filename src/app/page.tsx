import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
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
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto h-24 w-24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h2 className="mt-6 text-4xl font-bold font-headline">
              SACCO Connect
            </h2>
            <p className="mt-2 text-lg text-white/80">
              Your trusted partner in financial growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
