import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby"
import Layout from "../layout";
import config from "../../data/SiteConfig";

import Goodreads from "../components/Goodreads/Goodreads";

// Sends all nodes data to a component for rendering
class GoodreadsPage extends Component {
    render() {
        const bookNode = this.props.data.allGoodreadsShelf.nodes;

        return (
            <Layout>
                <div className="books-container">
                <Helmet title={`My Books | ${config.siteTitle}`} />
                <Goodreads bookNode={bookNode}/>
                </div>
            </Layout>
        )
    }
};

export default GoodreadsPage;

export const query = graphql`
  {
    allGoodreadsShelf {
      nodes {
        reviews {
          book {
            title
            authors {
              name
            }
            average_rating
            description
            link
            reviews {
              read_at
              rating
              started_at
            }
          }
          started_at
          read_at
          date_added
        }
        name
      }
    }
  }
`