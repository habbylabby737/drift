import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/flow/studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Studio />;
}
