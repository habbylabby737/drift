import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="relative grid min-h-dvh place-items-center bg-bg px-6 text-fg">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="w-full max-w-sm">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Back to studio
        </Link>
        <p className="font-display text-3xl font-medium tracking-tight">Drift</p>
        <h1 className="mt-6 text-xl font-medium tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted text-pretty">
          Optional. The studio runs in the browser either way.
        </p>
        <div className="mt-8 space-y-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="outline"
                className="w-full justify-center"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-fg-subtle">Sign-in is disabled.</p>
          )}
        </div>
      </div>
    </main>
  );
}
