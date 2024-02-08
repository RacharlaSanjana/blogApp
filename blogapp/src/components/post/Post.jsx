import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post card">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span key={c._id} className="postCat">{c.name}</span>
          ))}
        </div>
        <div className="postHeader">
          <span className="postAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
