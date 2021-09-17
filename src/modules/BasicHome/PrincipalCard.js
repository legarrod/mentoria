import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/AsyncHttpRequest';
import Card from '../../components/Card/Card';

export default function PrincipalCard() {
  const [allData, setAllData] = useState({});
  const [results, setResults] = useState([]);
  const [valueToSearch, setValueToSearch] = useState('Rick Sanchez');

  let urlGetCharacterByName =
    'https://rickandmortyapi.com/api/character/?name=';

  useEffect(() => {
    getData(`${urlGetCharacterByName}${valueToSearch}`, setAllData);
  }, [getData, valueToSearch]);

  useEffect(() => {
    setResults(allData?.results);
  }, [setResults, allData]);

  return (
    <div className="">
      <section className="flex justify-center">
        <input
          className="my-4"
          placeholder="Buscar..."
          onChange={(event) => setValueToSearch(event.target.value)}
        ></input>
      </section>
      <section className="flex flex-wrap justify-center">
        {results?.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </section>
    </div>
  );
}
