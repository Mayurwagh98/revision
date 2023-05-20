import AllRoutes from "./components/AllRoutes";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { Context, serverUrl } from "./main";
import axios from "axios";

function App() {
  let { setIsAuthenticated, setUser, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    let config = {
      withCredentials: true,
    };
    axios
      .get(
        `https://todo-fullstack-backend-06ao.onrender.com/api/users/mydetails`,
        config
      )
      .then((res) => {
        // console.log(res.data.user);
        setUser(res.data.user);
        setLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
