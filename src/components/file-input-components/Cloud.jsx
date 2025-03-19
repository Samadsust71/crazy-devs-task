import cloud from "../../assets/cloud.svg"

const Cloud = () => {
  return (
    <div className="flex flex-col gap-6 text-center">
                <div className="flex items-center justify-center gap-5 text-[54px] font-[500] leading-[54px] -tracking-[1.62px]">
                  <span className="">Add Files to</span>
                  <div className="flex h-[70px] w-[70px] -rotate-[8deg] items-center justify-center rounded-[16px] border-[#373737] border bg-[#1F1F1F] ">
                    <img src={cloud} />
                  </div>
                  <span>Cloud Chat</span>
                </div>
    
                <div className="text-[14px] leading-[18.2px] -tracking-[0.14px]">
                  <p className="text-text-secondary">
                    Your files will not be stored on our servers and no AI models
                    will be trained.
                  </p>
                  <p className="font-[600] text-accent-orange2">
                    Supported File Types: .docx, .pdf, .epub, and many text
                    filetypes
                  </p>
                </div>
              </div>
  )
}

export default Cloud
