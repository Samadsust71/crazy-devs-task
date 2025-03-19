import { Checkbox } from "../ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"


const SelectedFile = ({file}) => {
  return (
    <div
                  className="flex gap-[14px] rounded-full bg-foreground py-[6px] pl-3 pr-[7px]"
                >
                  <div className="flex items-center gap-2">
                    {file.name === "Report_file.pdf" ? (
                      <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon stroke-icon">
                        <svg
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                          stroke="none"
                          className="flex items-center justify-center bg-transparent duration-75 rounded-none w-[14px] h-[18px]"
                        >
                          <path
                            d="M14 4.60704L14 17.3708C14 17.7173 13.7144 17.9999 13.3643 17.9999H0.635669C0.285592 17.9999 0 17.7173 0 17.3708V0.629015C0 0.282601 0.285592 0 0.635669 0H9L14 4.60704Z"
                            fill="#F76638"
                          ></path>
                          <path
                            d="M14 4.53697H10.1405C9.5124 4.53697 9 4.07126 9 3.50038V0L14 4.53697Z"
                            fill="white"
                            fillOpacity="0.4"
                          ></path>
                          <rect
                            x="2.5"
                            y="9"
                            width="9"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                          <rect
                            x="2.5"
                            y="10.7903"
                            width="9"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                          <rect
                            x="2.5"
                            y="12.5806"
                            width="5.22852"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon stroke-icon">
                        <svg
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                          stroke="none"
                          className="flex items-center justify-center bg-transparent duration-75 rounded-none w-[14px] h-[18px]"
                        >
                          <path
                            d="M14 4.60704L14 17.3708C14 17.7173 13.7144 17.9999 13.3643 17.9999H0.635669C0.285592 17.9999 0 17.7173 0 17.3708V0.629015C0 0.282601 0.285592 0 0.635669 0H9L14 4.60704Z"
                            fill="#508EF5"
                          ></path>
                          <path
                            d="M14 4.53697H10.1405C9.5124 4.53697 9 4.07126 9 3.50038V0L14 4.53697Z"
                            fill="white"
                            fillOpacity="0.4"
                          ></path>
                          <rect
                            x="2.5"
                            y="9"
                            width="9"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                          <rect
                            x="2.5"
                            y="10.7903"
                            width="9"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                          <rect
                            x="2.5"
                            y="12.5806"
                            width="5.22852"
                            height="1.01613"
                            rx="0.508065"
                            fill="white"
                            fillOpacity="0.6"
                          ></rect>
                        </svg>
                      </div>
                    )}

                    <span>{file.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Checkbox className="border border-[#7C7C7C] rounded-[6px]" />
                    <span className="text-text-secondary">Force OCR</span>
                    <div>
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
                                Deep Dive processes documents section by section
                                for "unlimited" context, enabling complete
                                answers. Run once per chat to unlock Table AI
                                and Prompt Loops
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon  hover:fill-text cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      stroke="text"
                      className="h-6 w-6 flex items-center justify-center bg-transparent duration-75 rounded-none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.49408 6.49408C6.81951 6.16864 7.34715 6.16864 7.67259 6.49408L10 8.82149L12.3274 6.49408C12.6528 6.16864 13.1805 6.16864 13.5059 6.49408C13.8314 6.81951 13.8314 7.34715 13.5059 7.67259L11.1785 10L13.5059 12.3274C13.8314 12.6528 13.8314 13.1805 13.5059 13.5059C13.1805 13.8314 12.6528 13.8314 12.3274 13.5059L10 11.1785L7.67259 13.5059C7.34715 13.8314 6.81951 13.8314 6.49408 13.5059C6.16864 13.1805 6.16864 12.6528 6.49408 12.3274L8.82149 10L6.49408 7.67259C6.16864 7.34715 6.16864 6.81951 6.49408 6.49408Z"
                        fill="inherit"
                      ></path>
                    </svg>
                  </div>
                </div>
  )
}

export default SelectedFile
