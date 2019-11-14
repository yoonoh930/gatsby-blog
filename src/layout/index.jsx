import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavBar from "./Nav"
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <NavBar/>
        {children}
      </div>
    );
  }
}
