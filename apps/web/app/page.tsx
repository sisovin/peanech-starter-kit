import { AuthNav } from "@/components/auth/auth-nav";
import { HomeContent } from "@/components/home-content";
import { ClientOnly } from "@/components/client-only";

// Force dynamic rendering since AuthNav uses Clerk's currentUser()
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthNav />
      <ClientOnly>
        <HomeContent />
      </ClientOnly>
    </div>
  );
}
