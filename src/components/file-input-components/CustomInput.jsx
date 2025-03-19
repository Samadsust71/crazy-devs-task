const CustomInput = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-start gap-1">
        <input
          className="w-full flex rounded-full border border-transparent -tracking-[0.32px] transition-colors file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-disabled focus:border focus:border-accent-orange2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-input px-5 py-[10px] text-[14px]"
          placeholder="https://example.com/file.pdf"
        />
      </div>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-primary stroke-btn-primary-foreground fill-btn-primary-foreground text-btn-primary-foreground hover:bg-gradient-to-b from-accent to-accent-orange2 active:bg-accent disabled:bg-btn-disabled disabled:text-btn-disabled-foreground disabled:stroke-btn-disabled-foreground disabled:fill-btn-disabled-foreground disabled:border-btn-disabled-stroke px-6 py-[10.5px] text-sm leading-[18.9px] -tracking-[0.28px] absolute right-0 top-0 m-[2px] h-[calc(100%-4px)]">
        Add
      </button>
    </div>
  );
};

export default CustomInput;
