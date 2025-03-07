
import { Settings, Search } from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-black text-white flex flex-col justify-between p-4">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span className="text-yellow-400 text-2xl">⚡</span> Socrates
          </h1>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Button variant="outline" className="w-full border-gray-500">
            + Add folder
          </Button>
          <Button variant="outline" className="w-full border-gray-500">
            + Create chat
          </Button>
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="bg-gray-800 p-3 rounded-lg text-center">
        <p className="text-sm text-gray-400">Upgrade to Premium</p>
        <p className="text-xs text-gray-500">Make the most of all features!</p>
        <Button variant="default" className="mt-2 bg-yellow-500 text-black w-full">
          Upgrade Plan
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">Jessica Mills</span>
        </div>
        <Settings className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
