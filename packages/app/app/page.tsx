import { FetchIcon } from "@/components/icons/FetchIcon";
import { SafeIcon } from "@/components/icons/SafeIcon";
import { SignIcon } from "@/components/icons/SignIcon";

export default function Home() {
  return (
    <main className="py-16 md:py-24">
      <div className="space-y-6">
        <h1 className="font-bold text-center text-4xl md:text-8xl text-blue-800 mt-6">
          Get your sleep back.
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-700 text-center">
          We check the security of your token{" "}
          <span className="text-blue-400">approvals</span> so you don’t have to.
        </h3>
      </div>
      <div className="mt-32 md:mt-32 mb-12">
        <h3 className="text-xl md:text-xl font-medium mb-8  text-center text-gray-300">
          How does it work
        </h3>
        <div className="flex md:flex-row flex-col space-y-16 md:space-y-0 md:justify-around">
          <div className="max-w-xs p-6 bg-gradient-to-r from-cyan-50 to-blue-50 hover:bg-blue-100 rounded-3xl border border-blue-100 hover:animate-ping">
            <FetchIcon />
            <p className="my-3 text-gray-700">
              We fetch all of the approvals you gave.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-gradient-to-r from-cyan-50 to-blue-50 hover:bg-blue-100 rounded-3xl border border-blue-100 hover:animate-ping">
            <SignIcon />
            <p className="my-3 text-gray-700">
              You sign a permission for us to revoke your approvals in case of
              security breach.
            </p>
          </div>
          <div className="max-w-xs p-6  bg-gradient-to-r from-cyan-50 to-blue-50 hover:bg-blue-100 rounded-3xl border border-blue-100 hover:animate-ping">
            <SafeIcon />
            <p className="my-3 text-gray-700">
              In case of security breach, we revoke permission and secure your
              assets.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
