import Link from 'next/link';
import styles from '../styles/components/resultProducts.module.scss';

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

export function ResultProducts(props: { dataProducts: InsideProducts[] }) {

    return(
        <div className={styles.resultProducts}>

          {
            props.dataProducts.length > 0? (
              props.dataProducts.map( product => (

                <Link key={product.item.id} href={`/product/${product.item.id}`} >
                  <div className={styles.products}>
                    <img src={product.item.thumb} />
                    <div className={styles.wrapInfoProducts}>
                      <div className={styles.infoProducts}>
                        <p>
                          R$ {product.item.price.currency}
                          <img 
                            style={{opacity: product.item.free_shipping? 1: 0}}
                            src="../images/ic_shipping.png"
                            title="Envio grátis"
                            alt="Envio grátis"
                          />
                        </p>
                        <p>{product.item.title}</p>
                      </div>
                      <p className={styles.infoState}>{product.item.state}</p>
                    </div>            
                  </div>
                </Link>

              ))
            ) : (
              <h1>Não há anúncios que correspondem à sua busca.</h1>
            )
          }
          
        </div>
    );
}