import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderAuth from "./HeaderAuth";
import MobileMenu from "./MobileMenu";

function Header({ isAuthenticated, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 flex h-24 w-full justify-center px-4 py-2 md:px-6 ${menuOpen ? "bg-white" : "bg-transparent backdrop-blur-sm"}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <HeaderLogo />
        <HeaderNav />
        <HeaderAuth
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={onLogout}
        />
        <MobileMenu
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={onLogout}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </nav>
  );
}

export default Header;
