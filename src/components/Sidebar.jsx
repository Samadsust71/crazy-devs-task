
import { Settings, Search, WorkflowIcon, PanelRightOpenIcon } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/Logo-level.png"
import userImg from "../assets/user.png"
// import sidebarLeft from "../assets/sidebar-left.svg"

const Sidebar = () => {
  return (
    <div className="text-text flex flex-col justify-between h-screen pt-7 pb-7 pl-7 pr-3 w-full">
      {/* Top Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold flex items-center gap-2">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex items-center gap-2">
          <Search className="w-6 h-6 cursor-pointer text-[#868686] hover:text-text transition duration-300" />
          <PanelRightOpenIcon className="w-6 h-6 cursor-pointer text-[#868686]  hover:text-text transition duration-300"/>
          {/* <img src={sidebarLeft} alt="sidebar" /> */}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button variant="outline" className=" font-semibold text-sm w-full border-white/15 bg-background rounded-[56px]">
            + Add folder
          </Button>
          <Button variant="outline" className="bg-white/15 font-semibold text-sm w-full border-none rounded-[56px] hover:bg-white/15">
            + Create chat
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {/* Upgrade Section */}
      <div className="bg-[#363636] p-4 rounded-xl">
        <p className="text-text font-semibold">Upgrade to Premium</p>
        <p className="text-xs text-text-secondary font-normal mt-1">Make the most of all features!</p>
        <Button variant="default" className="mt-3 border border-accent-orange3 text-sm font-semibold bg-transparent text-text w-full rounded-[56px] hover:bg-transparent">
          Upgrade Plan
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 p-2 rounded-full bg-[#2B2B2B] flex justify-center items-center"><WorkflowIcon className=""/></span>
          <span className="text-sm font-medium capitalize">Flow AI Templates</span>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={userImg}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Jessica Mills</span>
        </div>
        <Settings className="w-5 h-5 cursor-pointer text-[#868686] hover:text-text transition duration-300" />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
