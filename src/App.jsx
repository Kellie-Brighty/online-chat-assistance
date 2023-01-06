import React from "react";
import ChatContainer from "./components/ChatContainer";
import "./App.css";
import { GlobalProvider } from "./store/Context";

const App = () => {

  return (
    <GlobalProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChatContainer />
      </div>
    </GlobalProvider>
  );
};

export default App;
