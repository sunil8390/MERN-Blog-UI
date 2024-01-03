import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/MainBlog/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Signup from "./Components/Accounts/Signup";

function App() {
  console.log("App component rendered");
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
