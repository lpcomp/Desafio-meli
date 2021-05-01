

import Router from 'next/router';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../styles/components/searchBar.module.scss';

interface SearchBar {
    textSearch: string;
}

export function SearchBar(props: SearchBar) {
    const [search, setSearch] = useState(props.textSearch);

    useEffect(() => {
        setSearch(props.textSearch);
    }, [props.textSearch]);

    function handleSearchProducts(e){
        e.preventDefault();

        if ( search.trim() ){
            Router.push(`/products/${search}`);            
        }
    }

    return (
        <header className={styles.container}>
            <div>
            <Link href="/">
                <img src="../images/Logo_ML.png" />
            </Link>            
            <form onSubmit={(e) => handleSearchProducts(e)}>
                <input 
                    type="text" 
                    placeholder="Buscar produtos, marcas e muito mais."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="button" onClick={handleSearchProducts}>
                <img src="../images/ic_Search.png" />
                </button>
            </form>
            </div>
        </header>
    );
}