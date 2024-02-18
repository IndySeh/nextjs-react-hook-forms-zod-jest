import Link from "next/link";
import { DesignedLinkProps } from "@/lib/types";
import { FC } from "react";
const DesignedLink: FC<DesignedLinkProps> = ({ href, children }) => {
    return (
      <Link
        className="p-2 w-24 mx-1 flex items-center justify-center rounded  bg-blue-600 border-none text-zinc-50"
        href={href}
      >
        {children}
      </Link>
    );
  };
 
export default DesignedLink