import { Button } from "@/components/ui/button";
import { useTheme } from "./context";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import SignUp from "./components/pages/signup";
import Auth from "./components/pages/protectedRoute";
import HomePage from "./components/pages/Homepage";

function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
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
