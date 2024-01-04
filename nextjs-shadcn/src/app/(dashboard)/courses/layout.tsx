import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      here we can show something which is relavent for all the courses like some
      upcoming courses and offers.
      {children}
    </div>
  );
}
