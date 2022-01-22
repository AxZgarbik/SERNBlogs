import styles from "../../styles/PostList.module.css"
import Post from "./Post";
const PostList = () => {
    return (
        <section className={styles.list_container}> 
            <div className={styles.container}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </section>
     );
}
 
export default PostList;