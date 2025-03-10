import { Dices, MapPin, MessagesSquare } from "lucide-react";

const BottomNavBar = () => {
  return (
    //<div className="fixed top-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-3">
    <div className="fixed top-0 left-0 w-full bg-white shadow-md border-t flex justify-between py-3 px-5">
      <NavItem icon={<Dices size={24}/>} label="Logo" />
      <div className="flex space-x-6">
        <NavItem icon={<MapPin size={24}/>} label="Location" />
        <NavItem icon={<MessagesSquare size={24} />} label="Chat" />
      </div>
      
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