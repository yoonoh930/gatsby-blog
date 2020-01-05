import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import { graphql } from "gatsby";
import config from "../../data/SiteConfig";

import Wiki from "../components/Wiki/Wiki";

class WikiPage extends Component {
  render() {
    const wikiNodes = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="wiki-container">
          <Helmet title={`Wiki | ${config.siteTitle}`} />
          <Wiki wikiNodes={wikiNodes}/>
        </div>
      </Layout>
    );
  }
}

export default WikiPage;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}, 
      filter: {frontmatter: {category: {in: ["Wiki", "wiki"]}}}
      ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "DD MMM, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
          }
        }
      }
    }
  }
`
