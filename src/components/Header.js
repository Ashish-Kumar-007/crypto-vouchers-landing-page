import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { name: "Home", route: "/" },
    // { name: "Generate Vouchers", route: "/generate" },
    // { name: "Redeem Vouchers", route: "/redeem" },
    { name: "Features", route: "/features" },
    { name: "About Us", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white text-2xl font-semibold">
              CryptoVouchers
            </div>
          </Link>
        </div>
        <nav className="flex space-x-6">
          {navItems.map((item, index) => (
            <Link key={index} href={item.route}>
              <div className="text-white hover:text-blue-300">{item.name}</div>
            </Link>
          ))}
        </nav>
        <div>
         <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
