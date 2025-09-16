"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { ThemeProvider } from "@/components/ui/themeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}
