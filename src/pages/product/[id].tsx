import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Product } from '../../components/Product';
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

function ProductPage({ router }) {
    const [selectedProduct, setSelectedProduct] = useState<InsideProducts[]>([]);
    const [crumbs, setCrumbs] = useState<string>('');

    useEffect(() => {
        const { id } = router.query;

        const resultProduct = products.filter( product => {
            return product.item.id === id;
        });

        const resultCrumbs = resultProduct.length > 0? resultProduct[0].item.title : '';

        setCrumbs(resultCrumbs);
        setSelectedProduct(resultProduct);
    }, [router.query]);

    return (
        <>

            <SearchBar textSearch="" />
            <div className="container">
                
                <BreadCrumbs crumbs={crumbs} />
                <Product selectedProduct={selectedProduct} />
                   
            </div>            

        </>

    )
}

export default withRouter(ProductPage);