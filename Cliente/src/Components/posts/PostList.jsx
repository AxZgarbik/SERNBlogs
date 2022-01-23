import styles from "../../styles/PostList.module.css"
import FlechaNext from "../../img/FlechaNext.png"
import FlechaPrevius from "../../img/FlechaPrevius.png"
import Post from "./Post";
const PostList = () => {
    return (
        <div className={styles.container}>
            <button className={styles.flecha}>
                <img src={FlechaPrevius} className={styles.previus}></img>
            </button> 
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <button className={styles.flecha}>
                <img src={FlechaNext} className={styles.next}></img>
            </button>
        </div>
     );
}
 
export default PostList;