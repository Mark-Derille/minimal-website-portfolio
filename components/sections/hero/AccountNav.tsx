import Link from "next/link";
import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

type AccountLinkType = {
  href: string;
  icon: any;
};
const AccountLink = ({ href = "#", icon }: AccountLinkType) => {
  return (
    <Link
      target="_blank"
      className="p-1 rounded-md border-2 border-orange-500 hover:border-orange-400 group hover:-translate-y-[1px]"
      href={href}
    >
      {icon}
    </Link>
  );
};

const iconStyle = "w-6 h-6 group-hover:text-orange-400";

function AccountNav() {
  return (
    <nav className="flex gap-3 text-orange-500">
      <AccountLink
        href="https://twitter.com/MarkDerille"
        icon={<BsTwitter className={iconStyle} />}
      />
      <AccountLink
        href="https://github.com/Mark-Derille"
        icon={<BsGithub className={iconStyle} />}
      />
      <AccountLink
        href="https://www.linkedin.com/in/markderille/"
        icon={<BsLinkedin className={iconStyle} />}
      />
    </nav>
  );
}

export default AccountNav;
