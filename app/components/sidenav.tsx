"use client";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContinents } from "../lib/data";

export default function SideNav() {
  const continents = getContinents();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {continents.map((continent) => {
        const continentHref = `/${continent.name
          .toLowerCase()
          .replace(/ /g, "-")}`;

        return (
          <NavLink
            key={continent.code}
            component={Link}
            href={continentHref}
            label={continent.name}
            active={pathname === continentHref}
          />
        );
      })}
    </div>
  );
}
