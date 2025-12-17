import { Button } from "@/components/ui/button";
import { useTheme } from "./context";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import Auth from "./components/pages/protectedRoute";
import HomePage from "./components/pages/Homepage";

import { TiAdjustBrightness } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import Logo from "./components/miniComponents/logo";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      className="w-full h-full flex flex-col items-start bg-linear-to-tr from-cyan-50 via-cyan-50 to-sky-100
    dark:bg-linear-to-tl dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition duration-75"
    >
      <Routes>
        <Route path="/login" index element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/Homepage"
          element={
            <Auth>
              <HomePage></HomePage>
            </Auth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
