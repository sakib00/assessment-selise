import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { SideNav } from './components/navigation/SideNav';
import { AuthorList } from './pages/AuthorList';
import { FavoriteList } from './pages/FavoriteList';
import { Error404 } from './pages/Error404';
import { Welcome } from './pages/Welcome';
import FavoritesContext from './state/FavoriteContext';

function App() {
  const [favorites, setFavorites] = useState([]);
  const value = useMemo(() => ({ favorites, setFavorites }), [favorites]);

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('favorites'));
    setFavorites(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='flex'>
      <div className='w-72 min-h-screen bg-white  shadow-lg py-10 px-4'>
        <SideNav />
      </div>
      <div className='w-full  py-10'>
        <FavoritesContext.Provider value={value}>
          <Routes>
            <Route path='/authors' element={<AuthorList />} />
            <Route index element={<Welcome />} />
            <Route path='/favoritelist' element={<FavoriteList />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </FavoritesContext.Provider>
      </div>
    </div>
  );
}

export default App;
