import { Link } from "@tanstack/react-router";
import { authEnabled, signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthChip() {
  const { user, isPending } = useCurrentUserState();

  if (isPending) {
    return (
      <div
        className="size-9 shrink-0 animate-pulse rounded-sm bg-fg/10"
        aria-hidden
      />
    );
  }

  if (user) {
    const label = user.displayName ?? user.primaryEmail ?? "Account";
    return (
      <div className="flex items-center gap-1.5 pl-1">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt=""
            className="size-7 rounded-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
        ) : (
          <span className="grid size-7 place-items-center rounded-full bg-bg-subtle text-xs font-medium text-fg">
            {label.charAt(0).toUpperCase()}
          </span>
        )}
        {authEnabled && (
          <button
            type="button"
            onClick={() => void signOut()}
            className="hidden h-9 px-2 text-xs text-fg-muted transition-colors duration-150 hover:text-fg sm:inline"
          >
            Sign out
          </button>
        )}
      </div>
    );
  }

  return (
    <Link
      to="/login"
      className="inline-flex h-9 items-center rounded-sm px-3 text-xs font-medium text-fg-muted transition-[color,background-color] duration-150 hover:bg-bg-subtle hover:text-fg"
    >
      Sign in
    </Link>
  );
}
