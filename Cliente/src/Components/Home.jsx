import Layout from "./layout/Layout"
import Search from "./layout/Search";
import PostList from "./posts/PostList";

const Home = () => {
    return (
    <Layout>
        <Search/>
        <PostList>
            
        </PostList>
    </Layout>);
}
 
export default Home;