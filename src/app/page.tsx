import Link from "next/link";
import DesignedLink from "./components/DesignedLink";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center mt-12">
      <h1 className="text-4xl text-zinc-50">React-Hook-Forms</h1>
      <p className="text-gray-400 pt-2">Nextjs, React-Hook-Forms, Zod, Jest</p>

      <section className="mt-4 w-42 flex justify-between">
        <DesignedLink href="/signup">Sign up</DesignedLink>
        <DesignedLink href="/login">Login</DesignedLink>
      </section>
    </div>
  );
}

