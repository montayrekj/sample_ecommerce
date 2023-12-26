import PostCard from "./PostCard";
import POST1 from "/public/images/home/post-1.png";
import POST2 from "/public/images/home/post-2.png";
import POST3 from "/public/images/home/post-3.png";

const POST = {
  title: "Loudest à la Madison #1 (L'integral)",
  description:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  date: "22 April 2021",
  reactions: 10,
  tags: ["Google", "Trending", "New"],
};

const POSTS = [
  { ...POST, image: POST1 },
  { ...POST, image: POST2 },
  { ...POST, image: POST3 },
];

export default function PostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
      {POSTS.map((post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </div>
  );
}
