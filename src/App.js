/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Flexbox from 'flexbox-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './components/card';
import Modal from './components/modal';
import SearchBar from './components/searchBar';

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [ready, setReady] = useState(false);
  const [number, setNumber] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChosen, setModalChosen] = useState(1);
  const [searchChosen, setSearchChosen] = useState('');
  const openModal = (idx) => {
    setModalChosen(idx);
    setModalOpen(true);
  };

  const load = () => {
    setTimeout(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${number}`)
        .then((res) => {
          let newChars = allCharacters.slice();
          newChars = newChars.concat(res.data.results);
          setAllCharacters(newChars);
        });
      setNumber(number + 1);
    }, 1000);
  };
  useEffect(() => {
    load();
    setReady(true);
  }, []);

  return (
    <div className="App">
      {modalOpen && <div onClick={() => setModalOpen(false)}><Modal character={allCharacters[modalChosen]} /></div>}
      <SearchBar allCharacters={allCharacters} setSearchChosen={setSearchChosen} />

      <InfiniteScroll
        dataLength={allCharacters.length}
        next={() => load()}
        hasMore
        scrollThreshold="85%"
      >
        <Flexbox
          flexWrap="wrap"
          justifyContent="center"
          marginTop="60px"
        >
          {ready && allCharacters.map((map, idx) => {
            if (map.name.toLowerCase().includes(searchChosen.toLowerCase())) {
              return (
                <div onClick={() => {
                  openModal(idx);
                }}
                >
                  <Card
                    character={allCharacters[idx]}
                  />
                </div>
              );
            }
          })}
        </Flexbox>
      </InfiniteScroll>
    </div>
  );
};

export default App;
