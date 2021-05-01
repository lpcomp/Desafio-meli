import styles from '../styles/components/breadCrumbs.module.scss';

export function BreadCrumbs(props: { crumbs: string }) {

  return (
    <div className={styles.breadCrumbs}>
      {
        props.crumbs && (
          props.crumbs.split(' ').map(crumb => (
              <span key={crumb}>
                <p>{crumb}</p>
                <p>{'>'}</p>
              </span>            
          ))
        )
      }
    </div>
  );
  
}