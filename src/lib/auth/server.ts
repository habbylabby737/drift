export const auth = {
  handler: async (_request: Request) =>
    new Response("Auth is disabled in this standalone build.", { status: 501 }),
};
