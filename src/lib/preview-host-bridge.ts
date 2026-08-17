type BridgeOptions = {
  navigate: (path: string) => void;
  getRoutePaths: () => string[];
};

export function collectRoutePathsFromTree(tree: { fullPath?: string; children?: unknown }): string[] {
  const out: string[] = [];
  const walk = (node: { fullPath?: string; children?: unknown }) => {
    if (typeof node.fullPath === "string") out.push(node.fullPath);
    const kids = node.children;
    if (Array.isArray(kids)) {
      for (const child of kids) {
        if (child && typeof child === "object") walk(child as { fullPath?: string; children?: unknown });
      }
    }
  };
  walk(tree);
  return out;
}

export function installPreviewHostBridge(_options: BridgeOptions) {
  return () => {};
}
