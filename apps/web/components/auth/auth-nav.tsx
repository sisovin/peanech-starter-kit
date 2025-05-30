import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import { NavSwitchers } from "@/components/nav-switchers";
import { NavLinks } from "@/components/nav-links";
import { ClientOnly } from "@/components/client-only";

export async function AuthNav() {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    // Continue without user data - the UI will handle it
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">          <div className="flex-shrink-0 flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
          >
            <div className="rounded-full border-2 border-white p-1">
              <Image
                src="/peanech_withbg.png"
                alt="Peanech Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span>Peanech App</span>
          </Link>
        </div>
          <div className="flex items-center space-x-4">
            <ClientOnly>
              <NavLinks isAuthenticated={!!user} />
            </ClientOnly>

            <ClientOnly>
              <NavSwitchers />
            </ClientOnly>

            {user ? (
              <div className="ml-3">
                <UserButton
                  afterSignOutUrl="/"
                  userProfileUrl="/user-profile"
                />
              </div>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
