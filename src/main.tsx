import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import App from "@/App";
import "@/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <NextUIProvider className="h-full text-foreground bg-background">
      <App />
    </NextUIProvider>
  </StrictMode>,
);
