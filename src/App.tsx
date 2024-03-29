import { FC } from "react";
import * as React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import { AppStyle } from "./styles/AppStyle.styled";


const App:FC = () =>  {
  
  return (
    <>
    <AppStyle>
      <SideBar />
      <Body />
    </AppStyle>
    </>
  )
}

export default App;
