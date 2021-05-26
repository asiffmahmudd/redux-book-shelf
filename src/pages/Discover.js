import React from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import {useSelector} from 'react-redux';

const Discover = () => {
    const books = useSelector(state => {
        return state.books.discoveredList
    })
    const addOption = true;
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} addOption={addOption}/>))
            }
        </PageLayout>
    );
};

export default Discover;