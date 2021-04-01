import { useEffect, useState } from 'react';

import { Button } from './components/Button';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

 


function handleClickButton(id: number) {
  setSelectedGenreId(id);
} 

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
 

  return (
        
    <SideBar  />

  )
}