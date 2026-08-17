import { GROK_PROVIDERS } from "./providers";

export const authEnabled = false;
export { GROK_PROVIDERS };

export function signIn(_providerId?: string, _opts?: { callbackURL?: string }) {
  return Promise.resolve();
}

export function signOut() {
  return Promise.resolve();
}
