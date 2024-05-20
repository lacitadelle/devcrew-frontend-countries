"use client";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "../components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <h1>🧭 World Explorer</h1>
      </AppShell.Header>
      <AppShell.Navbar>
        <SideNav />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
