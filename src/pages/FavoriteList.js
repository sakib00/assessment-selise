import React, { useContext, useEffect, useState } from 'react';
import { ListItemComponent } from '../components/ListItemComponent';
import { Loader } from '../components/loader/Loader';
import { Modal } from '../components/Modal';
import FavoritesContext from '../state/FavoriteContext';

export const FavoriteList = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      <div className='body container mx-auto'>
        <h1 className='text-2xl font-bold mx-1 my-4 tracking-wide'>
          Favorite Author List
        </h1>
        <div className='body flex'>
          <div className='list grid grid-cols-4 gap-6'>
            {favorites.length !== 0 ? (
              favorites.map((author) => (
                <div onClick={() => setCurrentAuthor(author)}>
                  <ListItemComponent key={author._id} author={author} />
                </div>
              ))
            ) : (
              <div className='flex items-center'>
                <h1 className='text-sm font-semibold text-gray-600 my-5'>
                  Add Favorite Authors from Author List.
                </h1>
              </div>
            )}
          </div>
        </div>
        <Modal
          currentAuthor={currentAuthor}
          setCurrentAuthor={setCurrentAuthor}
        />
      </div>
    </>
  );
};
