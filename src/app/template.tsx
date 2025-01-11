"use client";

import ObserverProvider from "@/providers/ObserverProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ObserverProvider>{children}</ObserverProvider>;
}
