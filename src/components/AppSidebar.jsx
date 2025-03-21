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
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Down from "./svg-components/Down";
import Home from "./svg-components/Home";

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
        <div className="flex gap-1">
          <Button className="rounded-full text-sm font-medium  hover:text-text-disabled fill-icon stroke-icon h-10 w-10 bg-card hover:bg-card">
            <Home />
          </Button>
          <div className="flex-1 rounded-full bg-card py-2.5 pl-2 pr-3">
            <AddFolder />
          </div>
        </div>

        <div className="my-8 overflow-auto scrollbar">
          <Accordion>
            <AccordionItem>
              <div className="flex justify-between items-center">
                <AccordionTrigger
                  value={"folders"}
                  className="group items-center w-[150px] flex-row-reverse justify-end gap-2"
                >
                  <span className="text-sm font-[500] leading-[18px] text-icon">
                    Folders
                  </span>
                  <Down />
                </AccordionTrigger>
                <Button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-foreground transition-all hover:bg-foreground">
                  <Plus />
                </Button>
              </div>
            </AccordionItem>
            <AccordionItem className="mt-8">
              <div className="flex justify-between items-center">
                <AccordionTrigger
                  value={"chats"}
                  className=" group items-center w-[150px] flex-row-reverse justify-end gap-2"
                >
                  <span className="text-sm font-[500] leading-[18px] text-icon">
                    Chats
                  </span>
                  <Down />
                </AccordionTrigger>
                <Button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-foreground transition-all hover:bg-foreground">
                  <Plus />
                </Button>
              </div>
            </AccordionItem>
          </Accordion>
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
