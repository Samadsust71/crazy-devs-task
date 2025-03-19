import AppSidebar from "./components/AppSidebar";
import FileUpload from "./components/FileUpload";
import { Sidebar, SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  return (
    <main className="flex w-full p-4">
      <AppSidebar />
      <div className="flex-1">
      <FileUpload />
      </div>
    </main>
  );
};

export default App;
