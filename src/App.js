// Movie 컴포넌트를 가져옴
import Movie from './components/Movie';
// movieDummy 파일에서 movies 데이터를 가져옴
import { movies } from './movieDummy';

function App() {
  return (
    <div>
      <div className='web-container'>
      {
          movies.results.map((item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
