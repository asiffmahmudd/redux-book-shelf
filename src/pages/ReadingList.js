import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
import {useSelector} from 'react-redux';
import Book from '../components/Book/Book'

const ReadingList = () => {
    const books = useSelector(state => {
        return state.books.readingList;
    })
    const addOption = false;
    return (
        <PageLayout>
            {
                books?.length 
                ?
                books?.map((book) => (<Book key={book.id} book={book} addOption={addOption}/>))
                :
                <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
            }
        </PageLayout>
    );
};

export default ReadingList;