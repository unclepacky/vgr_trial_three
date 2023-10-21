import Image from "next/image";
import logo from "@/public/vercel.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-700 flex justify-between py-5 px-10">
      <Link href="\">
        <Image src={logo} alt="logo" width={127} height={154} />
      </Link>
      <ul className="flex gap-2">
        <Link href="\customers">
          <li>Customers</li>
        </Link>
        <Link href="\customers\4">
          <li>Find</li>
        </Link>

        <li>Item3</li>
        <li>Item4</li>
        <li>Item5</li>
      </ul>
    </nav>
  );
};

export default Navbar;
