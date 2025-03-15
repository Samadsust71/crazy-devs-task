import { InfoIcon, X, FileText } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import cloud from "../assets/cloud.png";
import mask from "../assets/Mask.png";
import url from "../assets/url.png";
import dropbox from "../assets/Icons.png";
import drive from "../assets/drive.png";
import { Checkbox } from "./ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { IoIosInformation } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const files = [
  { name: "Report_file.pdf", forceOCR: false },
  { name: "Article.docs", forceOCR: false },
];

const FileUpload = () => {
  return (
    <div className="m-4 p-5 pb-20 bg-foreground text-text rounded-2xl bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:30px_30px] min-h-[calc(100vh-40px)] h-auto">
      {/* Header */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-20 mt-5">
          <div className="text-sm text-text text-center  bg-[#242424] px-3 py-2 rounded-full w-fit flex items-center gap-3">
            <span className="text-accent-orange2">
              <InfoIcon />
            </span>
            <p className="text-sm">
              The web version does not display local chats. To access all
              features, please
              <span className="text-accent-orange2 cursor-pointer">
                {" "}
                install the app.
              </span>
            </p>
          </div>
        </div>

        <div className="text-[54px] font-medium text-center flex items-center gap-2 justify-center">
          <span>Add Files to</span>
          <div className="">
            <img src={cloud} alt="cloud" />
          </div>
          <span>Cloud Chat</span>
        </div>

        <p className="text-center text-text-secondary text-sm font-semibold mt-6">
          Your files will not be stored on our servers and no AI models will be
          trained. <br />
          <span className="text-accent-orange3">
            Supported File Types: .docx, .pdf, .epub, and text files.
          </span>
        </p>

        {/* File Upload & URL Input Section */}
        <div className="mt-[60px]">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-[18.5px] h-[120px]">
              <img src={mask} alt="mask" />
              <p className="text-lg font-semibold">
                Drag & drop local files here,
                <br /> or click to select
              </p>
            </div>

            <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-[18.5px] h-[120px]">
              <img src={url} alt="url" />
              <div className="">
                <p className="text-lg font-semibold">Enter in a public URL:</p>
                <div className="flex items-center justify-between mt-2 gap-2 bg-[#353535] rounded-full border border-transparent focus-within:border-accent-orange2 transition-all duration-200">
                  <Input
                    placeholder="https://example.com/file.pdf"
                    className="h-10 bg-transparent placeholder:text-[#7E7C78] placeholder:text-xs outline-none border-none w-full"
                  />
                  <button className="bg-white/15 rounded-full px-4 h-10 text-text hover:bg-accent text-sm font-semibold">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-[18.5px] h-[120px]">
              <img src={dropbox} alt="drop-boc" />
              <p className="text-lg font-semibold ">Add files from Dropbox</p>
            </div>
            <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-[18.5px] h-[120px]">
              <img src={drive} alt="drive" />
              <p className="text-lg font-semibold ">
                Add files from Google Drive
              </p>
            </div>
          </div>
          {/* Selected Files List */}
          <div className="bg-[#242424] p-4 mt-5 rounded-[34px] flex items-center gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center bg-[#2B2B2B] rounded-full px-3 py-[7px]  w-fit gap-3 "
              >
                <div className="flex items-center gap-2">
                  <FileText
                    className={` w-4 h-4 ${
                      file.name === "Report_file.pdf"
                        ? "text-[#f76638]"
                        : "text-[#508ef5]"
                    }`}
                  />
                  <p className="text-sm">{file.name}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Checkbox className="border border-[#7C7C7C] rounded-[6px]" />
                  <span>Force OCR</span>
                  <div>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="flex justify-center items-center">
                          <IoIosInformation className="bg-white/30 hover:bg-white rounded-full text-black border-none outline-none w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-white w-[226px] text-xs">
                            <p>
                              Deep Dive processes documents section by section
                              for "unlimited" context, enabling complete
                              answers. Run once per chat to unlock Table AI and
                              Prompt Loops
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <X className="w-4 h-4 cursor-pointer text-text-secondary hover:text-text ml-[14px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 mt-[60px]">
          <Button
            variant="outline"
            className="border border-accent-orange3 bg-transparent h-[60px] text-text w-60 rounded-[56px] hover:bg-transparent"
          >
            Start
          </Button>
          <span className="font-semibold">or</span>
          <Button className="bg-gradient-to-b from-[#FFBF00] to-[#FB9937] h-[60px] text-text font-medium hover:opacity-100 w-60 rounded-[56px]">
            <HiSparkles className="text-3xl" />
            <span>Start with Deep Dive</span>
          </Button>
          <div>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="flex justify-center items-center">
                  <IoIosInformation className="bg-white/30 hover:bg-white rounded-full text-black border-none outline-none text-2xl" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-white w-[226px] text-xs">
                    <p>
                      Deep Dive processes documents section by section for
                      "unlimited" context, enabling complete answers. Run once
                      per chat to unlock Table AI and Prompt Loops
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
