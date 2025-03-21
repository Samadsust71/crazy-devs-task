import AppSidebar from "./components/AppSidebar";
import FileUpload from "./components/FileUpload";
import { Sidebar, SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  return (
    <main className="flex w-full p-4">
      <AppSidebar />
      <FileUpload />
    </main>
  );
};

export default App;
