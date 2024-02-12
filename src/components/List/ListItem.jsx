import React from 'react';

const ListItem = ({post}) => {
  return (
      <li className="list-item">
        <div className="list-item__title">
          {post.title}
        </div>
        <div className="list-item__text">
          {post.body}
        </div>
      </li>

  );
};

export default ListItem;