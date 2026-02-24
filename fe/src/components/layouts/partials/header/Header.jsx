import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderAuth from "./HeaderAuth";
import MobileMenu from "./MobileMenu";

function Header({ isAuthenticated, user, onLogout }) {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-24 w-full justify-center border-b border-gray-200 bg-transparent px-4 py-2 backdrop-blur-sm transition-colors duration-200 md:px-6">
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
        />
      </div>
    </nav>
  );
}

export default Header;
