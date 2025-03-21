import { AccordionItem, AccordionTrigger } from "../ui/accordion";

const FolderItem = ({ folderName }) => {
  return (
    <div className="flex items-center justify-between">
      <AccordionTrigger className="group flex flex-1 items-center w-[150px] flex-row-reverse justify-end gap-2">
        <span className="text-sm font-[500] leading-[18px] text-icon">
          {folderName}
        </span>
        <div className="flex items-center justify-center bg-transparent rounded-none fill-icon stroke-icon duration-200 group-data-[state=closed]:-rotate-180">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="flex items-center justify-center bg-transparent duration-75 rounded-none w-5 h-5"
          >
            <path
              d="M15 12.5L10 7.5L5 12.5"
              stroke="inherit"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </AccordionTrigger>
      <div className="">
        <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon stroke-icon group-hover/icon:stroke-foreground">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="flex items-center justify-center bg-transparent duration-75 rounded-none w-5 h-5"
          >
            <path
              d="M5 10H15"
              stroke="inherit"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10 15V5"
              stroke="inherit"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FolderItem;
