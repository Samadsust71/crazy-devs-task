import { Button } from "./ui/button";
import mask from "../assets/mask.svg";
import url from "../assets/url.svg";
import dropbox from "../assets/dropbox.svg";
import drive from "../assets/drive.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Header from "./file-input-components/Header";
import Cloud from "./file-input-components/Cloud";
import SelectedFile from "./file-input-components/SelectedFile";
import Sparkle from "./svg-components/Sparkle";
import CustomInput from "./file-input-components/CustomInput";
import TogglerNav from "./file-input-components/TogglerNav";
import { useSidebar } from "./ui/sidebar";
import dottedBG from "../assets/dotted-bg.png";
import TooltipIcon from "./svg-components/TooltipIcon";

const files = [
  { name: "Report_file.pdf", forceOCR: false },
  { name: "Articles.docs", forceOCR: false },
];

const FileUpload = () => {
  const { open } = useSidebar();
  return (
    <div className="relative bg-foreground text-text rounded-2xl overflow-hidden w-full">
      <img
        src={dottedBG}
        className="absolute left-[50%] top-[50%] -z-[0]  -translate-x-[50%] -translate-y-[calc(50%+100px)]"
      />
      <div className="flex flex-col w-full relative p-5">
        {!open && <TogglerNav />}
        {/* install(header) section */}
        <Header />

        {/* middle section */}
        <div className="mt-20 flex flex-col gap-[60px]">
          {/* cloud section */}
          <Cloud />

          {/* File Upload & URL Input Section */}
          <div className="w-fit mx-auto flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-2 text-[18px] font-[600] leading-[23.4px] -tracking-[0.18px] ">
              <div className="flex w-[406px] cursor-pointer items-center gap-[6px] rounded-[20px] bg-field p-6">
                <div className="flex h-[66px] w-[66px] items-center justify-center">
                  <img src={mask} className="w-full h-full object-cover" />
                </div>
                <span>
                  Drag &amp; drop local files here,
                  <br /> or click to select
                </span>
              </div>

              <div className="flex w-[406px] cursor-pointer items-center gap-[6px] rounded-[20px] bg-field p-6">
                <div className="flex h-[66px] w-[66px] items-center justify-center">
                  <img src={url} />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <span>Enter in a public URL:</span>
                  <CustomInput />
                </div>
              </div>

              {/* dropbox */}
              <div className="flex w-[406px] cursor-pointer items-center gap-[6px] rounded-[20px] bg-field p-6">
                <div className="flex h-[66px] w-[66px] items-center justify-center">
                  <img src={dropbox} />
                </div>
                <span>Add files from Dropbox</span>
              </div>

              {/* google drive */}
              <div className="flex w-[406px] cursor-pointer items-center gap-[6px] rounded-[20px] bg-field p-6">
                <div className="flex h-[66px] w-[66px] items-center justify-center">
                  <img src={drive} />
                </div>
                <span>Add files from Google Drive</span>
              </div>
            </div>

            {/* Selected Files List */}
            <div className="flex w-full max-w-[820px] flex-wrap gap-2 rounded-[40px] bg-field p-4 text-[14px] leading-[17.85px]">
              {files.map((file, index) => (
                <SelectedFile key={index} file={file} />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="relative mx-auto flex w-fit items-center justify-center gap-4">
            <Button className="border border-text/15 hover:border-accent-orange3 bg-transparent px-8 py-[23px] text-base leading-[21.6px] -tracking-[0.32px] w-[240px] rounded-[56px] hover:bg-transparent">
              Start
            </Button>
            <span>or</span>
            <Button className="bg-primary hover:bg-gradient-to-b from-[#FFBF00] to-[#FB9937]  text-text  rounded-full px-8 py-[23px] text-base leading-[21.6px] -tracking-[0.32px] w-[240px]">
              <Sparkle />
              Start with Deep Dive
            </Button>
            <div className="absolute right-0 top-[50%] -translate-y-[50%] translate-x-[calc(100%+8px)]">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="flex justify-center items-center">
                    <TooltipIcon />
                  </TooltipTrigger>
                  <TooltipContent className="text-xs leading-[14.4px] -tracking-[0.12px] text-text">
                    <p>
                      Deep Dive processes documents section by section for
                      "unlimited" context, enabling complete answers. Run once
                      per chat to unlock Table AI and Prompt Loops
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
