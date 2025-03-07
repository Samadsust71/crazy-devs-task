
import { Settings, Search, PanelRightOpenIcon, WorkflowIcon } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png"
import userImg from "../assets/user.png"

const Sidebar = () => {
  return (
    <div className="w-[280px] h-screen text-text flex flex-col justify-between ">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold flex items-center gap-2">
            <img src={logo} alt="logo" className="w-7 h-7 object-cover" />
            <span>Socrates</span>
          </div>
          <div className="flex items-center gap-2">
          <Search className="w-5 h-5 cursor-pointer text-[#868686]" />
          <PanelRightOpenIcon className="w-5 h-5 cursor-pointer text-[#868686]"/>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Button variant="outline" className="font-semibold text-sm w-full border-[#868686] bg-background rounded-[56px]">
            + Add folder
          </Button>
          <Button variant="outline" className=" font-semibold text-sm w-full border-[#868686] rounded-[56px] hover:bg-[#868686]">
            + Create chat
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {/* Upgrade Section */}
      <div className="bg-[#363636] p-4 rounded-xl">
        <p className="text-text font-semibold">Upgrade to Premium</p>
        <p className="text-xs text-text-secondary font-normal">Make the most of all features!</p>
        <Button variant="default" className="mt-2 border border-accent-orange3 bg-transparent text-text w-full rounded-[56px] hover:bg-transparent">
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
        <Settings className="w-5 h-5 cursor-pointer text-[#868686]" />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
