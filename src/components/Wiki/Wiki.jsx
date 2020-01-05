import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
// import "./Wiki.css";

class Wiki extends Component {
    getUniqTags() {
        const tagList = [];
        this.props.wikiNodes.forEach(node => {
            tagList.push(...node.node.frontmatter.tags)
        });

        const uniqTags = [...new Set(tagList)];

        return uniqTags;
    };

    getTagsNodes() {
        const tags = this.getUniqTags();
        const tagsNode = {};

        tags.forEach(tag => {
            tagsNode[tag] = [];
        })

        // For each tag, add the md file to the list
        this.props.wikiNodes.forEach(node => {
            node.node.frontmatter.tags.forEach(tag => {
                tagsNode[tag].push({
                    path: node.node.fields.slug,
                    title: node.node.frontmatter.title,
                });
            });
        });
        return tagsNode;
    };


    render() {

        const tagsNode = this.getTagsNodes();

        const WikiContainer = styled.div`

        `;

        const WikiSectionContainer = styled.div`
        `;

        const WikiArticleContainer = styled.div`
        `;

        const WikiArticleLink = styled(Link)`
        `;

        return (
        <div className="wiki">
            <WikiContainer>
                {
                        Object.keys(tagsNode).map(tag => (
                        <WikiSectionContainer>
                            <h2>{tag}</h2>
                            <WikiArticleContainer>
                            {
                                tagsNode[tag].map(article => (
                                    <WikiArticleLink to={article.path} key={article.title}>
                                        <p>{article.title}&nbsp;</p>
                                    </WikiArticleLink>
                                ))
                            }
                            </WikiArticleContainer>
                        </WikiSectionContainer>  
                    ))                
                }
            </WikiContainer>
        </div>
        );
    } 
}

export default Wiki;
