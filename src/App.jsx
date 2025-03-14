import FileUpload from "./components/FileUpload";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-background">
      <div className="flex max-w-[1440px] mx-auto gap-3 h-screen">
        {/* Sidebar (Static) */}
        <div className="w-64 h-screen">
          <Sidebar />
        </div>

        {/* FileUpload (Scrollable) */}
        <div className="flex-1 h-screen overflow-y-auto  p-4">
          <FileUpload />
        </div>
      </div>
    </div>
  );
};

export default App;
