import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/core"

import config from "../../data/SiteConfig";
import NavBar from "../components/Nav"
import "./index.css";

import { globalStyles } from "../styles"

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Global styles={globalStyles} />
        <NavBar/>
        {children}
      </div>
    );
  }
}
