import React from 'react';
import { useState, useEffect } from 'react';

import { ListItemComponent } from '../components/ListItemComponent';

export const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthorRequest = async () => {
    const url = `//api.quotable.io/authors`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setAuthors(responseJson.results);
    } else {
      setAuthors([]);
    }
  };

  useEffect(() => {
    getAuthorRequest();
  }, []);

  return (
    <div className='body container mx-auto'>
      <div className='flex'>
        <div className='list grid grid-cols-4 gap-6'>
          {authors.length !== 0 ? (
            authors.map((author) => <ListItemComponent author={author} />)
          ) : (
            <div className='flex items-center'>
              <h1 className='text-sm font-semibold  my-5'>No Authors found.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
