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
import { MdInfo } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosInformation } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const files = [
  { name: "Report_file.pdf", forceOCR: false },
  { name: "Article.docs", forceOCR: false },
];

const FileUpload = () => {
  return (
    <div className="p-4 bg-foreground text-text rounded-2xl bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:30px_30px]">
      {/* Header */}
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

      <div className="text-[54px] font-medium text-center mb-2 flex items-center gap-2 justify-center">
        <span>Add Files to</span>
        <div className="">
          <img src={cloud} alt="cloud" />
        </div>
        <span>Cloud Chat</span>
      </div>

      <p className="text-center text-text-secondary text-sm font-semibold">
        Your files will not be stored on our servers and no AI models will be
        trained. <br />
        <span className="text-accent-orange3">
          Supported File Types: .docx, .pdf, .epub, and text files.
        </span>
      </p>

      {/* File Upload & URL Input Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-4">
          <img src={mask} alt="mask" />
          <p className="text-lg font-semibold">
            Drag & drop local files here,
            <br /> or click to select
          </p>
        </div>

        <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-4">
          <img src={url} alt="url" />
          <div className="">
            <p className="text-lg font-semibold">Enter in a public URL:</p>
            <div className="flex items-center justify-between mt-2 gap-2 bg-[#353535] rounded-full ">
              <Input
                placeholder="https://example.com/file.pdf"
                className=" bg-transparent placeholder:text-[#7E7C78] placeholder:text-xs outline-none border-none"
              />
              <button className="bg-white/15 rounded-full px-4 py-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropbox & Google Drive Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-4">
          <img src={dropbox} alt="drop-boc" />
          <p className="text-lg font-semibold">Add files from Dropbox</p>
        </div>

        <div className="bg-[#242424] p-6 rounded-[20px]  cursor-pointer flex items-center gap-2">
          <img src={drive} alt="drive" />
          <p className="text-lg font-semibold">Add files from Google Drive</p>
        </div>
      </div>

      {/* Selected Files List */}
      <div className="bg-[#242424] p-4 mt-4 rounded-[34px] flex items-center gap-3">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center bg-[#2B2B2B] rounded-full px-2 w-fit gap-3 "
          >
            <div className="flex items-center gap-2">
              <FileText
                className={` w-4 h-4 ${
                  file.name === "Report_file.pdf"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
              />
              <p className="text-sm">{file.name}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Checkbox className="border border-[#7C7C7C] rounded-[6px]" />
              <span>Force OCR</span>
              <IoIosInformation className="bg-[#585858] w-4 h-4 rounded-full text-text-secondary/90" />
              <X className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button
          variant="outline"
          className="border border-accent-orange3 bg-transparent  text-text w-60 rounded-[56px] hover:bg-transparent"
        >
          Start
        </Button>
        <span>or</span>
        <Button className="bg-gradient-to-b from-[#FFBF00] to-[#FB9937] text-text font-medium hover:opacity-90 w-60 rounded-[56px]">
        <HiSparkles className="text-3xl"/><span>Start with Deep Dive</span>
        </Button>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center">
                <IoIosInformation  className="bg-white rounded-full text-black border-none outline-none text-2xl" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-white w-[226px] text-xs">
                  <p>
                    Deep Dive processes documents section by section for
                    "unlimited" context, enabling complete answers. Run once per
                    chat to unlock Table AI and Prompt Loops
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
