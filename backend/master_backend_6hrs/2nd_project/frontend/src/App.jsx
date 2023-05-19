import AllRoutes from "./components/AllRoutes";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
