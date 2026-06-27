import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/global.css";
import { BlogPost } from "./pages/BlogPost/BlogPost";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogPost />
  </StrictMode>
);
