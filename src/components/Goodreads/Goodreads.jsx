import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

class Goodreads extends React.Component {
    getBookListing() {
        const toRead = this.props.bookNode.filter(node => node.name === "to-read")[0];
        const reading = this.props.bookNode.filter(node => node.name === "currently-reading")[0];
        const read = this.props.bookNode.filter(node => node.name === "read")[0];

        const toReadListing = [];
        const readingListing = [];
        const readListing = [];

        toRead.reviews.forEach(review => {
            toReadListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
            });
        });
        reading.reviews.forEach(review => {
            readingListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
                started_at: review.book.started_at,
            });
        });
        read.reviews.forEach(review => {
            readListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
                started_at: review.book.started_at,
                finished_at: review.book.read_at,
            });
        });

        return [toReadListing, readingListing, readListing];
    };

    render() {

        const [toReadListing, readingListing, readListing] = this.getBookListing();

        return(
            <div>
                {
                    readListing.map(review => (
                        <p>{review.title}</p>
                    ))
                }
            </div>
        )
    }
};

export default Goodreads