export type AppUser = {
  id: string;
  displayName?: string | null;
  primaryEmail?: string | null;
  profileImageUrl?: string | null;
};

export function useCurrentUser(): AppUser | null {
  return null;
}

export function useCurrentUserState() {
  return { user: null as AppUser | null, isPending: false };
}
