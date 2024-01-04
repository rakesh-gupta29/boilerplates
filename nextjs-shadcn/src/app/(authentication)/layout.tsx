import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      this will be container for all the auth pages
      {children}
    </div>
  );
}
