"use client";

import { ShieldIcon } from "@/components/icons/ShieldIcon";
import Link from "next/link";

export const ApprovalsButtonLink = () => {
  return (
    <Link
      href="/approvals"
      className="flex items-center space-x-2 px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white"
    >
      <ShieldIcon />
      <p>Get safe now</p>
    </Link>
  );
};
