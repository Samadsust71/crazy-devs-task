


const Header = () => {
  return (
    <div className="flex items-center justify-center mt-5">
          <div className="text-sm text-text text-center  bg-[#242424] px-4 py-2 rounded-full w-fit flex items-center gap-3 shadow-md">
            <div className="flex items-center justify-center bg-transparent duration-75 rounded-none fill-icon stroke-accent-orange2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex items-center justify-center bg-transparent duration-75 rounded-none w-5 h-5"
              >
                <path
                  d="M9.99996 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 9.99996 1.66699C5.41663 1.66699 1.66663 5.41699 1.66663 10.0003C1.66663 14.5837 5.41663 18.3337 9.99996 18.3337Z"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 6.66699V10.8337"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.99536 13.333H10.0028"
                  stroke="inherit"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="text-[14px] leading-[18.9px] -tracking-[0.14px]">
              The web version does not display local chats. To access all
              features, please{" "}
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 text-accent-orange2 active:text-accent-orange3 disabled:text-btn-disabled hover:bg-orange-linear hover:bg-clip-text hover:text-accent-orange2 transition-none p-1">
                install the app.
              </button>
            </span>
          </div>
        </div>
  )
}

export default Header
