import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="bg-violet-700/30 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
        {/* Logo */}
        <Logo />
        

        {/* Menu */}
        <Menu />
      </div>
    </div>
  );
}
