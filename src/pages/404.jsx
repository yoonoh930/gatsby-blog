import React from "react"
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";


const NotFound = () => (
  <Layout>
    <div className="404-container">
        <Helmet title={`Error | ${config.siteTitle}`}/>
        <h2>Sorry. We couldn't find what you asked for.</h2>
    </div>
  </Layout>
);

export default NotFound;
