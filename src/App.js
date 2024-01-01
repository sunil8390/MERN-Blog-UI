import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Components/MainBlog/Main";

function App() {

  console.log("App component rendered");
  return (
    <ChakraProvider>
      <div className="App">
      <Main/>
      </div>
    </ChakraProvider>
  );
}



export default App;
