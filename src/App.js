import './App.scss';
import List from "./components/List/List";
import {useGetAllPostsQuery} from "./api/api";

const LIMIT = 7;

function App() {
  const {data: posts, error, isLoading} = useGetAllPostsQuery();

  return (
      <div className="app">
        <h1>List with posts using RTK query</h1>
        {!error && !isLoading && <List posts={posts} limit={LIMIT}/>}
        {error && <div className='error-text'>An error occurred while receiving data. Please try again later.</div>}
      </div>
  );
}

export default App;
