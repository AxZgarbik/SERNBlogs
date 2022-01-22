import styles from "../../styles/Search.module.css"

const Search = () => {
    return ( 
        <div className={styles.containerSearch}>
            <div className={styles.containerInput}>
                <input className={styles.input} id="searchInput" placeholder="Ingrese una categoria"></input>
            </div>
        </div>
     );
}
 
export default Search;
