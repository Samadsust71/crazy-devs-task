import { BreadcrumbSeparator } from "../ui/breadcrumb";

const CustomSeparator = () => {
  return (
    <BreadcrumbSeparator>
      <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-text-disabled">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          stroke="none"
          className="flex items-center justify-center bg-transparent duration-75 rounded-none w-5 h-5"
        >
          <path
            d="M8 7.4563L8 12.5437C8 12.9494 8.56798 13.1526 8.90016 12.8657L11.8456 10.322C12.0515 10.1442 12.0515 9.85583 11.8456 9.67799L8.90016 7.13429C8.56798 6.84741 8 7.05059 8 7.4563Z"
            fill="inherit"
          ></path>
        </svg>
      </div>
    </BreadcrumbSeparator>
  );
};

export default CustomSeparator;
