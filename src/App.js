import './App.scss';
import List from "./components/List/List";
import {useGetAllPostsQuery} from "./api/api";
import {RotatingLines} from "react-loader-spinner";

const LIMIT = 7;

function App() {
  const {data: posts, error, isLoading, refetch} = useGetAllPostsQuery();

  return (
      <div className="app">
        <h1>List with posts using RTK query</h1>
        {isLoading && !error && (<div className="spinner">
          <RotatingLines
              visible={true}
              height="48"
              width="48"
              strokeWidth="5"
              ariaLabel="rotating-lines-loading"
          />
        </div>)}
        {!error && !isLoading && <List posts={posts} limit={LIMIT}/>}
        {error && <div className='error-text'>An error occurred while receiving data. Please try again later.</div>}
        <div className="update">
          <button className="update-button" onClick={refetch}>Update data</button>
        </div>
      </div>
  );
}

export default App;
