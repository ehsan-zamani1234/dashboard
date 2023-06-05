import styled from "@emotion/styled";
import SidebarContainer from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";

const MainContainer = styled("div")({
  display: "flex",
  marginTop: "100px",
  width: "100%",
});

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <MainContainer>
        <SidebarContainer showSideBar={showSideBar} />
        <Dashboard />
      </MainContainer>
    </>
  );
}

export default App;
