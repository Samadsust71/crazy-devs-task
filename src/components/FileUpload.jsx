
import { CloudUpload, Link, File, Trash2, InfoIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FileUpload = () => {
  const [files, setFiles] = useState([
    { name: "Report_file.pdf", forceOCR: false },
    { name: "Article.docs", forceOCR: false },
  ]);

  const toggleOCR = (index) => {
    setFiles((prevFiles) =>
      prevFiles.map((file, i) =>
        i === index ? { ...file, forceOCR: !file.forceOCR } : file
      )
    );
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-screen p-6 bg-foreground text-white rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-center mb-2">
      <div className="text-sm text-text text-center  bg-[#242424] px-3 py-2 rounded-full w-fit flex items-center gap-3">
        <span className="text-accent-orange2"><InfoIcon /></span>
        <p className="text-sm">The web version does not display local chats. To access all features, please
        <span className="text-accent-orange2 cursor-pointer"> install the app.</span></p>
      </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">
        Add Files to <span className="text-blue-400">Cloud Chat</span>
      </h2>

      <p className="text-center text-gray-400 text-sm">
        Your files will not be stored on our servers and no AI models will be trained. <br />
        <span className="text-yellow-400">Supported File Types:</span> .docx, .pdf, .epub, and text files.
      </p>

      {/* File Upload & URL Input Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-900 p-4 rounded-lg text-center cursor-pointer border border-gray-700">
          <CloudUpload className="w-10 h-10 mx-auto text-gray-400" />
          <p className="text-gray-400 text-sm">Drag & drop local files here, or click to select</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400">Enter in a public URL:</p>
          <div className="flex items-center mt-2 gap-2">
            <Input placeholder="https://example.com/file.pdf" className="flex-1 bg-gray-800 text-white border-none" />
            <Button variant="outline" className="border-gray-500">
              <Link className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      </div>

      {/* Dropbox & Google Drive Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button variant="outline" className="border-gray-500 w-full">
          <img src="/dropbox.svg" alt="Dropbox" className="w-6 h-6 mr-2" /> Add files from Dropbox
        </Button>

        <Button variant="outline" className="border-gray-500 w-full">
          <img src="/google-drive.svg" alt="Google Drive" className="w-6 h-6 mr-2" /> Add files from Google Drive
        </Button>
      </div>

      {/* Selected Files List */}
      <div className="bg-gray-900 p-3 mt-4 rounded-lg border border-gray-700">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <File className="text-gray-400 w-4 h-4" />
              <p className="text-sm">{file.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className={`text-xs ${file.forceOCR ? "bg-yellow-400 text-black" : "border-gray-500"}`}
                onClick={() => toggleOCR(index)}
              >
                Force OCR
              </Button>
              <Trash2 className="w-4 h-4 text-red-400 cursor-pointer" onClick={() => removeFile(index)} />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button variant="outline" className="border-yellow-400 text-yellow-400 px-6">
          Start
        </Button>
        <Button className="bg-yellow-400 text-black px-6">
          Start with Deep Dive
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
