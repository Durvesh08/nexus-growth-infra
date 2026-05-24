import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl text-center px-6">
        <h1 className="text-4xl font-extrabold">Nexus Growth</h1>
        <p className="mt-4 text-lg text-muted-foreground">Static entry added for Vercel deployment.</p>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

export {};
