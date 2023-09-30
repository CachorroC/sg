'use client';
import { useSearch } from '#@/app/context/search-context';
import searchbar from './searchbar.module.css';

export default function InputSearchBar() {
  const {
    search, setSearch
  } = useSearch();

  return (

    <input
      type="text"
      className={searchbar.input}
      value={search}
      placeholder={'Buscar'}
      onChange={(
        input
      ) => {
        input.preventDefault();
        setSearch(
          input.target.value
        );
      }}
    />


  );
}
