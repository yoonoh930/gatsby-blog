import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import * as moment from "moment";

class Goodreads extends React.Component {
    getBookListing() {
        const toRead = this.props.bookNode.filter(node => node.name === "to-read")[0];
        const reading = this.props.bookNode.filter(node => node.name === "currently-reading")[0];
        const read = this.props.bookNode.filter(node => node.name === "read")[0];
        const onHold = this.props.bookNode.filter(node => node.name === "on-hold")[0];

        const toReadListing = [];
        const readingListing = [];
        const readListing = [];
        const onHoldListing = [];

        toRead.reviews.forEach(review => {
            toReadListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
                added: moment(review.date_added),
            });
        });
        toReadListing.sort((a, b) => {
            if (isFinite(a.added.diff(b.added))) {
                return -a.added.diff(b.added);
            } else {
                return isFinite(a.added.valueOf()) ? -1 : 1;
            }
        });
        reading.reviews.forEach(review => {
            readingListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
                started_at: moment(review.started_at),
            });
        });
        read.reviews.forEach(review => {
            readListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
                started_at: moment(review.started_at),
                finished_at: moment(review.read_at),
            });
        });
        readListing.sort((a, b) => {
            if (isFinite(a.finished_at.diff(b.finished_at))) {
                return -a.finished_at.diff(b.finished_at); // Descending
            } else {
                return isFinite(a.finished_at.valueOf()) ? -1 : 1;
            }
        });
        onHold.reviews.forEach(review => {
            onHoldListing.push({
                title: review.book.title,
                author: review.book.authors, // array in case of multiple authors
                average_rating: review.book.average_rating,
                description: review.book.description,
            });
        });

        return [toReadListing, readingListing, readListing, onHoldListing];
    };

    render() {

        const [toReadListing, readingListing, readListing, onHoldListing] = this.getBookListing();

        const BookListingsContainer = styled.div`
            max-width: 95vh;
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.2;
        `;

        const ShelfContainer = styled.div`
        `;

        const BooksContainer = styled.div`
        h3 {
            margin-block-end: 0.6em;
        }
        `;

        const BookInfoContainer = styled.div`
            display: flex;
            flow-direction: row;
            // justify-content: space-between;

            p {
                margin-block-start: 0;
            }
        `;

        return(
            <BookListingsContainer>
                <ShelfContainer>
                    <h2>Currently Reading</h2>
                        
                    {readingListing.map(review => (
                        <BooksContainer>
                            <h3>{review.title}</h3>
                            <BookInfoContainer>
                                <p>{review.author.map(i => i.name).join(", ")} </p>
                                <p>| <i>Started at</i> : {review.started_at.format("MMM-DD-YYYY")}</p>
                            </BookInfoContainer>
                        </BooksContainer>
                    ))}
                </ShelfContainer>
                <ShelfContainer>
                    <h2>Already Read</h2>
                    {
                        readListing.map(review => (
                            <BooksContainer>
                                <h3>{review.title}</h3>
                                <BookInfoContainer>
                                    <p><i>{review.author.map(i => i.name).join(", ")}</i>&nbsp;</p>
                                    <p>|&nbsp;Read Between : {review.started_at.isValid() ? review.started_at.format("MMM-DD-YYYY") : "Not logged"} ~ {review.finished_at.isValid() ? review.finished_at.format("MMM-DD-YYYY") : "Not logged"}</p>
                                </BookInfoContainer>
                            </BooksContainer>
                            
                        ))
                    }
                </ShelfContainer>
                <ShelfContainer>
                    <h2>On Hold</h2>
                    {
                        onHoldListing.map(review => (
                            <BooksContainer>
                                <h3>{review.title}</h3>
                                <BookInfoContainer>
                                    <p><i>{review.author.map(i => i.name).join(", ")}</i>&nbsp;</p>
                                </BookInfoContainer>
                            </BooksContainer>
                            
                        ))
                    }
                </ShelfContainer>
                <ShelfContainer>
                    <h2>To Read Later</h2>
                    {
                        toReadListing.map(review => (
                            <BooksContainer>
                                <h3>{review.title}</h3>
                                <BookInfoContainer>
                                    <p><i>{review.author.map(i => i.name).join(", ")}</i>&nbsp;</p>
                                    <p>|&nbsp;Added : {review.added.isValid() ? review.added.format("MMM-DD-YYYY") : "Not logged"}</p>
                                </BookInfoContainer>
                            </BooksContainer>
                            
                        ))
                    }
                </ShelfContainer>
            </BookListingsContainer>
        )
    }
};

export default Goodreads