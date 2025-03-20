import "@/index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { querClient } from "./lib/react-query";

export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Toaster richColors />
        <QueryClientProvider client={querClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}