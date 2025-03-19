import { useSidebar } from "../ui/sidebar";

const RightSidebarIcon = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      onClick={toggleSidebar}
      className="flex items-center justify-center bg-transparent duration-75 rounded-none cursor-pointer fill-icon stroke-icon hover:fill-white hover:stroke-white"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 flex items-center justify-center bg-transparent duration-75 rounded-none"
      >
        <path
          d="M21.4512 14.8441V9.1554C21.4512 4.41479 19.5549 2.51855 14.8143 2.51855H9.12561C4.38501 2.51855 2.48877 4.41479 2.48877 9.1554V14.8441C2.48877 19.5847 4.38501 21.481 9.12561 21.481H14.8143C19.5549 21.481 21.4512 19.5847 21.4512 14.8441Z"
          stroke="inherit"
          strokeWidth="1.42218"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.17749 2.51855V21.481"
          stroke="inherit"
          strokeWidth="1.42218"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.41 14.5601L14.97 12.0001L12.41 9.44006"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default RightSidebarIcon;
