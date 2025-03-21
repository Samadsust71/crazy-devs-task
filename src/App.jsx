import AppSidebar from "./components/AppSidebar";
import FileUpload from "./components/FileUpload";


const App = () => {
  return (
    <main className="flex w-full p-4">
      <AppSidebar />
      <FileUpload />
    </main>
  );
};

export default App;
