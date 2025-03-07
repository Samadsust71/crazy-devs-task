import FileUpload from "./components/FileUpload";
import Sidebar from "./components/Sidebar";


const App = () => {
  return <>
  
   <div className="flex items-center">
    <Sidebar/>
    <FileUpload/>
   </div>
  </>;
};

export default App;
