import Posts from "../Posts";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import Users from "../Users";

function Home() {
  function shuffledPosts() {
    let posts = [...Posts];
    let currInd = posts.length,
      randomIndex;
    while (currInd !== 0) {
      randomIndex = Math.floor(Math.random() * currInd);
      currInd--;
      [posts[currInd], posts[randomIndex]] = [
        posts[randomIndex],
        posts[currInd],
      ];
    }
    return posts;
  }

  const posts = shuffledPosts();
  return (
    <>
      <div className="md:w-[700px] w-[450px] rounded-lg mx-auto mt-5 mb-10 px-3 py-6">
        {posts.map((post) => {
          const userDP = Users.find(
            (user) => user.userName === post.userName
          ).img;
          console.log(userDP);

          return (
            <PostCard
              img={post.media}
              username={post.userName}
              caption={post.caption}
              date={post.date}
              dp={userDP}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
