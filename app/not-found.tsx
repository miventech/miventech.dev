import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen grid place-items-center bg-bg text-fg">
        <div className="text-center px-6">
          <p className="font-mono text-sm text-accent-glow">404</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold font-display">
            Page not found
          </h1>
          <p className="mt-3 text-fg-muted max-w-md">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/en" className="btn-accent">
              Go home
            </Link>
            <Link href="/en/projects" className="btn-ghost">
              View projects
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
