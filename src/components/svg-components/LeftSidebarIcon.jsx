import { useSidebar } from "../ui/sidebar";

const LeftSidebarIcon = () => {
  const {toggleSidebar} = useSidebar()
  return (
    <div onClick={toggleSidebar} className="flex items-center justify-center bg-transparent duration-75 rounded-none cursor-pointer fill-icon stroke-icon hover:fill-white hover:stroke-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 flex items-center justify-center bg-transparent duration-75 rounded-none"
      >
        <path
          d="M21.4512 14.8444V9.15564C21.4512 4.41504 19.5549 2.5188 14.8143 2.5188H9.12561C4.38501 2.5188 2.48877 4.41504 2.48877 9.15564V14.8444C2.48877 19.585 4.38501 21.4812 9.12561 21.4812H14.8143C19.5549 21.4812 21.4512 19.585 21.4512 14.8444Z"
          stroke="inherit"
          strokeWidth="1.42218"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        />
        <path
          d="M8.17749 2.5188V21.4812"
          stroke="inherit"
          strokeWidth="1.42218"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        />
        <path
          d="M14.9699 9.43994L12.4099 11.9999L14.9699 14.5599"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        />
      </svg>
    </div>
  );
};

export default LeftSidebarIcon;
