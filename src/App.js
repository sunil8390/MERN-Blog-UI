import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/MainBlog/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Signup from "./Components/Accounts/Signup";
import { getIsLogin } from "./Components/Accounts/auth";
import Dashbaord from "./Components/Dashboard/Dashbaord";
import Footer from "./Components/MainBlog/Footer";
import Header from "./Components/MainBlog/Header";
import ProtectedRoute from "./ProtectedRoute";
import SinglePost from "./Components/Post/SinglePost";


function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/dashboard" element={<Dashbaord />} /> */}
            <Route path="/dashboard" element={ <ProtectedRoute> <Dashbaord /> </ProtectedRoute> } />
            <Route path="/post/:postId" element={<SinglePost />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
