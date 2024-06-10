import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import Providers from "@/components/layout/providers";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "CBAS NMP Admin",
  description: "NMP Admin / Control Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Providers session={session}>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-hidden pt-16">{children}</main>
        </div>
      </Providers>
    </>
  );
}
