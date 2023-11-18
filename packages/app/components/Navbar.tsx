"use client";

import { ApprovalsButtonLink } from "@/components/ApprovalsButtonLink";
import ConnectButton from "@/components/ConnectButton";
import { Logo } from "@/components/Logo";
import { usePathname } from "next/navigation";

const DAPP_PAGE_URL = "/approvals";
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <Logo />
      <div>
        {pathname === DAPP_PAGE_URL ? (
          <ConnectButton />
        ) : (
          <ApprovalsButtonLink />
        )}
      </div>
    </div>
  );
};
