import React, { useEffect, useState } from "react";
import { BlogSnippet } from "../Components/BlogSnippet";
import { H1 } from "../Components/Components";

/**
 * @author
 * @function Blog
 **/

export const Blog = (props) => {
  const description = {
    "https://medium.com/p/bc4e995c073c": "我為自己設計咗一款週時間表同埋月時間表。呢篇文章係教大家點樣用嘅。",
    "id2": "test2",
  };
  const [isPending, setIsPending] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setIsPending(true);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imyt"
    )
      .then((result) => result.json())
      .then((data) => {
        setBlogs(data.items);
      })
      .catch((error) => console.log(error));
    setIsPending(false);
  }, []);
  return (
    <div className="w-full text-left px-8">
      <H1>📝 Blog</H1>

      {isPending ? "Loading" : ""}
      {blogs &&
        blogs.map((blog) => {
          return (
            <BlogSnippet
              title={blog.title}
              thumbnail={blog.thumbnail}
              link={blog.guid}
              pubDate={blog.pubDate}
              key={blog.guid}
              description={description[blog.guid]}
              categories={blog.categories}
            />
          );
        })}
    </div>
  );
};
