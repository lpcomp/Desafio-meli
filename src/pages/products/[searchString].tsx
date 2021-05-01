import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';

import { ResultProducts } from '../../components/ResultProducts';
import { SearchBar } from '../../components/SearchBar';

import products from '../../../products.json';

interface InsideProducts {
    author: TypeAutor;
    item: TypeItem;
}

interface TypeAutor {
    name: string;
    lastname: string;
}

interface TypeItem {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    thumb: string;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    state: string;
    description: string;
}

function Products({ router }) {
    const [urlQuery, setUrlQuery] = useState('');
    const [listProducts, setListProducts] = useState<InsideProducts[]>([]);

    useEffect(() => {
        const { searchString } = router.query;
        setUrlQuery(searchString);

        const lowerCaseSearch = searchString? searchString.toLowerCase() : '';
        const resultProducts = products.filter( product => {
            return product.item.title.toLowerCase().indexOf(lowerCaseSearch) >= 0;
        });

        setListProducts(resultProducts);        
    }, [router.query]);

    return (
        <>

            <SearchBar textSearch={ urlQuery } />

            <div className="container">
                <ResultProducts dataProducts={listProducts} />
            </div>

        </>

    )
}

export default withRouter(Products);