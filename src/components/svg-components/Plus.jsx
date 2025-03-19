const Plus = () => {
  return (
    <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-white stroke-white">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex items-center justify-center bg-transparent duration-75 rounded-none w-5 h-5"
      >
        <path
          d="M5 10H15"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15V5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Plus;
