import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }


  render() {
    const postList = this.getPostList();
    const ArticleLink = styled(Link)`
    text-decoration: none;
    color: #000;
    transition: opacity 0.25s;;
    -webkit-tap-highlight-color: rgba(255, 255, 55, 0);

    &:hover h2,
    &:focus h2 {
    color: #6166DC;
  }
  `
  const TitleDate = styled.span`
    color: #bbb;
    font-size: 1.3rem;
  `
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <ArticleLink to={post.path} key={post.title}>
            <h2>{post.title} <TitleDate>| {post.date}</TitleDate></h2>
            <p>{post.excerpt}</p>
          </ArticleLink>
        ))}
      </div>
    );
  }
}

export default PostListing;
