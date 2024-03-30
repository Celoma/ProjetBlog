import React from 'react';

const Post = ({ blog, users }) => {
  const author = users.find((user) => user.id === blog.authorId)?.username;

  return (
    <div key={blog.id} className="cursor-pointer mb-8 group hover:bg-[#D9D9D9] p-4 flex flex-col bg-white w-[400px] rounded">
      <img className="w-[400px] h-[255PX] rounded" src="/images/defaultblog.jpg" alt="" />
      <p className="text-sm ml-2 w-min text-white bg-custom-blue p-1.5 rounded-md mt-4 mb-2">{blog.theme}</p>
      <h1 className="ml-2 font-bold text-3xl truncate mb-2">{blog.title}</h1>
      {author && <p className="text-sm ml-2 text-[#777777] mb-2">{author}</p>}
      <p className="ml-2 truncate text-[#777777] text-base mb-2 group-hover:text-black">{blog.body}</p>
    </div>
  );
};

export default Post;
