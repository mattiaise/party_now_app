import { Home, CirclePlus, User } from "lucide-react";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-3">
      <NavItem icon={<Home size={24} />} label="Home" />
      <NavItem icon={<CirclePlus size={24} />} label="Create" />
      <NavItem icon={<User size={24} />} label="Profile" />
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

export default BottomNavBar;