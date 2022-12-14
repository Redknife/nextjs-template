import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { darkTheme, normalizeCss } from 'stitches.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  normalizeCss();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
