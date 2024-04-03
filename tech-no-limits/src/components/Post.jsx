import React from 'react';

const Post = ({ id, theme, title, authorId, body, likes, allUsers }) => {
  return (
    <a href={`/pages/blog/${id}`} className='cursor-pointer hover:bg-[#D9D9D9] flex flex-col p-4 bg-white rounded'>
      <img className="max-h-64 w-auto rounded" src="/images/defaultblog.jpg" alt="" />
      <p className='text-sm ml-2 w-min text-white bg-custom-blue p-1 rounded-md mt-4 mb-2'>{theme}</p>
      <h1 className='ml-2 font-bold text-3xl truncate mb-2'>{title}</h1>
      {allUsers && allUsers.find(user => user.id === authorId) && (
          <p className='text-sm ml-2 text-[#777777] mb-2'>{allUsers.find(user => user.id === authorId)?.username}</p>
      )}
      <p className='ml-2 truncate mb-2'>{body}</p>
      <p className='ml-2 mb-2 flex'>
          {likes.length}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 ml-1 mt-0.5"
              >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
      </p>
  </a>
  );
};

export default Post;
