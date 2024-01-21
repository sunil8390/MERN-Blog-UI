import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/MainBlog/Main";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Signup from "./Components/Accounts/Signup";
import { getIsLogin } from "./Components/Accounts/auth";
import Dashbaord from "./Components/Dashboard/Dashbaord";
import Footer from "./Components/MainBlog/Footer";
import Header from "./Components/MainBlog/Header";

function App() {
  console.log("App component rendered");
  console.log(getIsLogin());
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/login" element={!getIsLogin() ? <Login /> : <Navigate to="/dashboard" />} /> */}
            <Route path="/login" element={<Login /> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={getIsLogin() ? <Dashbaord /> : <Navigate to="/login" />} />
            {/* <Route path="/dashboard" element={<Dashbaord />} /> */}
          </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
