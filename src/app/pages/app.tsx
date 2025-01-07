// File: pages/_app.tsx

import { AppProps } from 'next/app'; // Import AppProps type from Next.js
import { ThemeProvider } from "../components/ui/theme-provider"; // Import your ThemeProvider component
import { ModeToggle } from "../@/components/ui/theme-btn"; // Corrected import for the theme toggle component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">  {/* Wrap the whole app in ThemeProvider */}
      <ModeToggle /> {/* Render the ModeToggle component */}
      <Component {...pageProps} />  {/* Render the current page */}
    </ThemeProvider>
  );
}

export default MyApp;
