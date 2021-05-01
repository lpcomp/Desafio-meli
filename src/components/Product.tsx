import styles from '../styles/components/product.module.scss';

interface InsideProducts {
  item: TypeItem;
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

export function Product(props: { selectedProduct: InsideProducts[]}) {
    
    return (
        <div className={styles.product}>
          
          {
            props.selectedProduct.length > 0? (
              
              <>                
                <div className={styles.infoProductLeft}>
                  <img src={props.selectedProduct[0].item.picture} />
                  <div>
                    <p>Descrição do Produto</p>
                    <p>{props.selectedProduct[0].item.description}</p>
                  </div>
                </div>

                <div className={styles.infoProductRight}>
                  <p>{`${props.selectedProduct[0].item.condition} | ${props.selectedProduct[0].item.sold_quantity} vendidos`}</p>
                  <p>{props.selectedProduct[0].item.title}</p>
                  <p>{`R$ ${props.selectedProduct[0].item.price.currency}`}</p>
                  <button type="button">Comprar</button>
                </div>
              </>
            ) : (
              <h1>Não há anúncios que correspondem à esse produto.</h1>
            )
          }

        </div>
    );
}