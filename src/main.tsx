import { StrictMode } from "react"; // 1️⃣ React core
import { createRoot } from "react-dom/client"; // 2️⃣ React DOM
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"; // 3️⃣ UI library styles (side effects first!)
import "./index.css"; // 4️⃣ Local global styles (Tailwind, overrides)
import { MantineProvider } from "@mantine/core"; // 5️⃣ UI library JS (providers, components)

// 6️⃣ Local app code
import App from "./App";
import { theme } from "./theme/mantineTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
);
