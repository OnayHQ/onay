import ConnectButton from "@/components/ConnectButton";
import { Logo } from "@/components/Logo";

export const Navbar = () => (
  <div className="flex justify-between">
    <Logo />
    <div>
      <ConnectButton />
    </div>
  </div>
);
