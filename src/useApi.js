import axios from 'axios';

const useApi = () => {
  const load = (number, allCharacters) => {
    setTimeout(() => {
      axios.get(`https://rickandmortyapi.com/api/character/?page=${number}`)
        .then((res) => {
          let newChars = allCharacters.slice();
          newChars = newChars.concat(res.data.results);
          // setAllCharacters(newChars);
          return (newChars);
        });
      // setNumber(number + 1);
    }, 1000);
  };

  return {
    load,
  };
};
export default useApi;
