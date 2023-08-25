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
    <header className="bg-gradient-to-r from-violet-500 to-cyan-800 py-4 font-chakra-petch">
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
          <a href="#" className="text-white hover:text-blue-300">
            Login
          </a>
          <a href="#" className="text-white hover:text-blue-300 ml-4">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
