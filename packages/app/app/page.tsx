import { FetchIcon } from "@/components/icons/FetchIcon";
import { SafeIcon } from "@/components/icons/SafeIcon";
import { SignIcon } from "@/components/icons/SignIcon";

export default function Home() {
  return (
    <main className="py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl md:text-8xl">Get your sleep back.</h1>
        <h3 className="text-xl md:text-2xl">
          We check the security of your{" "}
          <span className="underline underline-offset-4">approvals</span> so you
          don’t have to.
        </h3>
      </div>
      <div className="mt-32 md:mt-64 mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-8">How does it work</h3>
        <div className="flex md:flex-row flex-col space-y-16 md:space-y-0 md:justify-between">
          <div className="max-w-xs">
            <FetchIcon />
            <p className="my-3">We fetch all of the approvals you gave.</p>
          </div>
          <div className="max-w-xs">
            <SignIcon />
            <p className="my-3">
              You sign a permission for us to revoke your approvals in case of
              security breach.
            </p>
          </div>
          <div className="max-w-xs">
            <SafeIcon />
            <p className="my-3">
              Get your sleep back, In case of security breach, we revoke
              permission and secure your assets.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
