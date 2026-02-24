import { Link, useLocation } from "react-router";
import { LuLayoutDashboard, LuUsers, LuUserCog, LuX } from "react-icons/lu";

const menuItems = [
  { label: "Dashboard", path: "/admin", icon: LuLayoutDashboard },
  { label: "Pengguna", path: "/admin/users", icon: LuUsers },
  { label: "Profil", path: "/admin/profile", icon: LuUserCog },
];

function Sidebar({ user, sidebarOpen, onClose, onLogout, onNavClick }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 transform flex-col bg-gray-900 text-white transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
        <div>
          <Link to="/admin" className="text-lg font-bold text-white">
            Torang Bersih
          </Link>
          <p className="mt-0.5 text-xs text-gray-400">Panel Admin</p>
        </div>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="text-gray-400 transition hover:text-white lg:hidden"
          aria-label="Tutup sidebar"
        >
          <LuX className="h-5 w-5" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavClick}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                isActive
                  ? "bg-indigo-600 font-medium text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User info + Logout */}
      <div className="border-t border-gray-800 px-4 py-4">
        <div className="mb-3 flex items-center gap-3">
          {user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt=""
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold">
              {user?.full_name?.charAt(0).toUpperCase() || "?"}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {user?.full_name || user?.username}
            </p>
            <p className="truncate text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-center text-sm text-gray-400 transition hover:bg-gray-800 hover:text-white"
        >
          Keluar
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
