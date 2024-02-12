import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem";

const List = ({posts, limit}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = posts ? Math.ceil(posts.length / limit) : 0;
  const [paginatedPosts, setPaginatedPosts] = useState([]);

  const setPage = (page) => {
    setCurrentPage(page);
  }

  const nextPage = () => {
    setCurrentPage((state) => {
      if ((state + 1) <= totalPages) {
        return state + 1;
      } else {
        return state;
      }
    });
  }

  const prevPage = () => {
    setCurrentPage((state) => {
      if ((state - 1) > 0) {
        return state - 1;
      } else {
        return state;
      }
    });
  }

  useEffect(() => {
    if (posts?.length) {
      setPaginatedPosts(posts.slice((currentPage - 1) * limit, currentPage * limit))
    }
  }, [posts, currentPage, limit]);

  return (
      <>
        <div className="list">
          {paginatedPosts.map(post => <ListItem key={post.id} post={post}/>)}
        </div>
        <div className="pagination">
          <button
              className="pagination__item"
              disabled={currentPage === 1}
              onClick={prevPage}
          >[Prev]</button>
          {Array.from({length: totalPages}).map((page, idx) => {
            return <button
                className={currentPage === idx + 1 ? "pagination__item pagination__item--current" : "pagination__item"}
                key={idx}
                onClick={() => setPage(idx + 1)}
            >{idx + 1}</button>
          })}
          <button
              className="pagination__item"
              disabled={currentPage === totalPages}
              onClick={nextPage}
          >[Next]</button>
        </div>
      </>
  );
};

export default List;