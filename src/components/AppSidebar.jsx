import { Button } from "./ui/button";
import userImg from "../assets/user.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";
import Logo from "./svg-components/Logo";
import Search from "./svg-components/Search";
import LeftSidebarIcon from "./svg-components/LeftSidebarIcon";
import Flow from "./svg-components/Flow";
import Settings from "./svg-components/Settings";

const AppSidebar = () => {
  const {open} = useSidebar()
  console.log(open)
  return (
    <Sidebar variant={"floating"} className="text-text p-4 pr-0">
      {/* Top Section */}
      <SidebarHeader className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between gap-5">
          <Logo />

          <div className="flex items-center gap-3">
            <Search />
            <LeftSidebarIcon />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-auto mt-8">
        <div className=" flex flex-col gap-3">
          <Button
            variant="outline"
            className=" font-semibold text-sm w-full border-white/15 bg-background rounded-full px-6 py-[17px]"
          >
            + Add folder
          </Button>
          <Button
            variant="outline"
            className="bg-white/15 font-semibold text-sm w-full border-none rounded-full hover:bg-white/15 px-6 py-[17px]"
          >
            + Create chat
          </Button>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-3 gap-3">
        <div className="bg-card p-4 rounded-xl flex flex-col gap-3">
          <div className="space-y-1">
            <span className="text-[16px] font-[600] leading-[17.6px]">
              Upgrade to Premium
            </span>
            <p className="text-[12px] leading-[14.4px] text-icon">
              Make the most of all features!
            </p>
          </div>
          <Button className=" px-6 h-[42px] border border-accent-orange2 hover:border-text text-sm -tracking-[0.28px] font-semibold bg-transparent text-text w-full rounded-full hover:bg-transparent">
            Upgrade plan
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Flow/>
          <span className="text-sm font-[500] -tracking-[0.28px]">
            Flow AI Templates
          </span>
        </div>
        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <img className="aspect-square h-full w-full" src={userImg} />
            </span>
            <span className="text-sm font-[500] -tracking-[0.28px]">
              Jessica Mills
            </span>
          </div>
          <Settings/>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
