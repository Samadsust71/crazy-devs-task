import FileUpload from "./components/FileUpload";
import Sidebar from "./components/Sidebar";


const App = () => {
  return <>
  
   <div className="flex items-center bg-background max-w-[1440px] p-4 gap-5">
    <Sidebar/>
    <FileUpload/>
   </div>
  </>;
};

export default App;
