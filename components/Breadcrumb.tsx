import Link from "next/link";
import { BreadcrumbProps } from "@/Types/types";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <div className="flex space-x-2 text-sm breadcrumbs">
      {links.map((link, index) => (
        <div key={index} className="flex space-x-2 items-center">
          {index > 0 && <span> {">"} </span>}
          {link.href ? (
            <Link href={link.href}>
              <span className="flex cursor-pointer">{link.text}</span>
            </Link>
          ) : (
            <span>{link.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};
