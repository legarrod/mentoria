import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/AsyncHttpRequest';

export default function PrincipalCard() {
  const [allData, setAllData] = useState({});
  const [results, setResults] = useState([]);

  let urlGetCharacterByName =
    'https://rickandmortyapi.com/api/character/?name=';

  useEffect(() => {
    getData(urlGetCharacterByName, setAllData);
  }, [getData]);

  useEffect(() => {
    setResults(allData?.results);
  }, [setResults, allData]);

  return (
    <div>
      {results?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
