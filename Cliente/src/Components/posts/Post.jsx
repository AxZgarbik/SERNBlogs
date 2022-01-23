import styles from "../../styles/Post.module.css"
const Post = () => {
    return ( 
        <div className={styles.card}>
            <img></img>
            <h1>Titulo</h1>
            <p>Resumen</p>
            <h3>Autor:</h3>
        </div>
     );
}
 
export default Post;
