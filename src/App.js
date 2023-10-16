// Movie 컴포넌트를 가져옴
import Movie from './components/Movie.style';
// movieDummy 파일에서 movies 데이터를 가져옴
import { movies } from './movieDummy';
// Styled-Components 적용
import styled from 'styled-components';

// web-container > Styled-Components 적용
const WebContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function App() {
  return (
    <div>
      <WebContainer>
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
      </WebContainer>
    </div>
  );
}

export default App;
