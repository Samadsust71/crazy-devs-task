import { Button } from "./ui/button";
import userImg from "../assets/avatar.jpg";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./ui/sidebar";
import Logo from "./svg-components/Logo";
import Search from "./svg-components/Search";
import LeftSidebarIcon from "./svg-components/LeftSidebarIcon";
import Flow from "./svg-components/Flow";
import Settings from "./svg-components/Settings";
import Plus from "./svg-components/Plus";
import AddFolder from "./sidebar-components/AddFolder";

const AppSidebar = () => {
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

      <SidebarContent className="overflow-auto mt-8 px-3">
        {/* <div className=" flex flex-col gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-1 font-semibold text-sm w-full border-white/15 bg-background rounded-full px-6 py-[17px]"
          >
            <Plus/> <span>Add folder</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-1 bg-white/15 font-semibold text-sm w-full border-none rounded-full hover:bg-white/15 px-6 py-[17px]"
          >
            <Plus/> <span>Create chat</span>
          </Button>
        </div> */}

        <div className="flex gap-1">
          <Button className="rounded-full text-sm font-medium  hover:text-text-disabled fill-icon stroke-icon h-10 w-10 bg-card hover:bg-card">
            <div className="flex items-center justify-center bg-transparent duration-75 rounded-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="h-6 w-6 flex items-center justify-center bg-transparent duration-75 rounded-none"
              >
                <path
                  d="M7.5 17.5001V11.3334C7.5 10.8667 7.5 10.6334 7.59083 10.4551C7.67072 10.2983 7.79821 10.1708 7.95501 10.0909C8.13327 10.0001 8.36662 10.0001 8.83333 10.0001H11.1667C11.6334 10.0001 11.8667 10.0001 12.045 10.0909C12.2018 10.1708 12.3293 10.2983 12.4092 10.4551C12.5 10.6334 12.5 10.8667 12.5 11.3334V17.5001M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </Button>
          <div className="flex-1 rounded-full bg-card py-2.5 pl-2 pr-3">
            <AddFolder />
          </div>
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
          <Button className=" px-6 py-[10.5px] border border-accent-orange2 hover:border-text text-sm leading-[18.9px] -tracking-[0.28px] font-semibold bg-transparent text-text w-full rounded-full hover:bg-transparent">
            Upgrade plan
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Flow />
          <span className="text-sm font-[500] -tracking-[0.28px]">
            Flow AI Templates
          </span>
        </div>
        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full"
                src={userImg}
                alt="user"
              />
            </span>
            <span className="text-sm font-[500] -tracking-[0.28px]">
              Jessica Mills
            </span>
          </div>
          <Settings />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
