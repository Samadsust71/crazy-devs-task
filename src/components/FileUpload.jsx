
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

const files = [
  { name: "Report_file.pdf", forceOCR: false },
  { name: "Articles.docs", forceOCR: false },
];

const FileUpload = () => {
  return (
    <div className="bg-foreground text-text rounded-2xl bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:30px_30px] h-auto p-5">
      <div className="flex flex-col w-full ">
        {/* install(header) section */}
        <Header/>

        {/* middle section */}
        <div className="mt-20 flex flex-col gap-[60px]">
          {/* cloud section */}
          <Cloud/>

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
                  <div className="relative w-full">
                    <div className="flex flex-col items-start gap-1">
                      <input
                        className="w-full flex rounded-full border border-transparent -tracking-[0.32px] transition-colors file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-disabled focus:border focus:border-accent-orange2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input px-5 py-[10px] text-[14px]"
                        placeholder="https://example.com/file.pdf"
                      />
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary stroke-btn-primary-foreground fill-btn-primary-foreground text-btn-primary-foreground hover:bg-accent active:bg-accent disabled:bg-btn-disabled disabled:text-btn-disabled-foreground disabled:stroke-btn-disabled-foreground disabled:fill-btn-disabled-foreground disabled:border-btn-disabled-stroke px-6 py-[10.5px] text-sm leading-[18.9px] -tracking-[0.28px] absolute right-0 top-0 m-[2px] h-[calc(100%-4px)]">
                      Add
                    </button>
                  </div>
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
            <Button className="border border-[#454545] hover:border-accent-orange3 bg-transparent px-8 py-[23px] text-base leading-[21.6px] -tracking-[0.32px] w-[240px] rounded-[56px] hover:bg-transparent">
              Start
            </Button>
            <span>or</span>
            <Button className=" bg-primary hover:bg-gradient-to-b from-[#FFBF00] to-[#FB9937]  text-text  rounded-full px-8 py-[23px] text-base leading-[21.6px] -tracking-[0.32px] w-[240px]">
              <Sparkle/>
              Start with Deep Dive
            </Button>
            <div className="absolute right-0 top-[50%] -translate-y-[50%] translate-x-[calc(100%+8px)]">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="flex justify-center items-center">
                    <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon stroke-icon hover:fill-text">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="h-6 w-6 flex items-center justify-center bg-transparent duration-75 rounded-none"
                        stroke="none"
                      >
                        <path
                          d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1209 7.84638 17.2635 5.78216 15.7407 4.25932C14.2178 2.73648 12.1536 1.87913 10 1.875ZM9.84375 5.625C10.0292 5.625 10.2104 5.67998 10.3646 5.783C10.5188 5.88601 10.6389 6.03243 10.7099 6.20373C10.7808 6.37504 10.7994 6.56354 10.7632 6.7454C10.7271 6.92725 10.6378 7.0943 10.5067 7.22541C10.3756 7.35652 10.2085 7.44581 10.0267 7.48199C9.84479 7.51816 9.65629 7.49959 9.48499 7.42864C9.31368 7.35768 9.16726 7.23752 9.06425 7.08335C8.96124 6.92918 8.90625 6.74792 8.90625 6.5625C8.90625 6.31386 9.00503 6.0754 9.18084 5.89959C9.35666 5.72377 9.59511 5.625 9.84375 5.625ZM10.625 14.375H10C9.83424 14.375 9.67527 14.3092 9.55806 14.1919C9.44085 14.0747 9.375 13.9158 9.375 13.75V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75H10C10.1658 8.75 10.3247 8.81585 10.4419 8.93306C10.5592 9.05027 10.625 9.20924 10.625 9.375V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375Z"
                          fill="inherit"
                        ></path>
                      </svg>
                    </div>
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
    </div>
  );
};

export default FileUpload;
