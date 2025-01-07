// File: components/theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Wait until the component is mounted before rendering
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent SSR mismatch by rendering nothing initially
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
