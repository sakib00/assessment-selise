import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SideNav } from './components/navigation/SideNav';
import { AuthorList } from './pages/AuthorList';
import { FavoriteList } from './pages/FavoriteList';
import { Error404 } from './pages/Error404';

function App() {
  return (
    <div className='flex'>
      <div className='w-72'>
        <SideNav />
      </div>
      <div className='w-full'>
        <Routes>
          <Route path='authors' element={<AuthorList />} />
          <Route path='favoritelist' element={<FavoriteList />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
