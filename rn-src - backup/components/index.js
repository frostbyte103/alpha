import React, { Component } from "react";
import CardContainer from "./CardContainer.js";
import SideBar from "./SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Calls: { screen: CardContainer },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;


export CardImage from './CardImage';
export CardContainer from './CardContainer';