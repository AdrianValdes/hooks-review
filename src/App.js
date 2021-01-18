import Counter from "./useEffect/Counter";
import CounterStep from "./useEffect/CounterStep";
import Greeting from "./useEffect/Greeting";
import SearchResults from "./useEffect/SearchResults";
import UseEffectHook from "./useEffect/UseEffectHook";
import UseEffectHook1 from "./useEffect/UseEffectHook1";
import SearchResultsCallback from "./useCallback/SeachResultsCallback";
import SearchResults1 from "./useEffect/SearchResults1";
import AddColorForm from "./useRefs/addColorForm";
import WordCount from "./useMemo/WordCount";
import RequestGithubUser from "./dataRequest/RequestGithubUser";
import faker from "faker";
import List from "./RenderPropsList/List";
import { FixedSizeList } from "react-window";

import GithubUserWithCustomHook from "./dataRequest/GithubUserWithCustomHook";
const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));
function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      {/*  <img src={bigList[index].avatar} alt={bigList[index].name} width={50} /> */}
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );
  return (
    <>
      {/*  <Counter /> */}
      {/*  <CounterStep /> */}
      {/* <AddColorForm /> */}
      {/* <Greeting name={"peter"} /> */}
      {/*  <UseEffectHook /> */}
      {/*  <UseEffectHook1 /> */}
      {/* <SearchResults /> */}
      {/* <SearchResults1 /> */}
      {/* <SearchResultsCallback /> */}
      {/* <WordCount>You are not going to believe this</WordCount> */}
      {/* <RequestGithubUser /> */}
      <GithubUserWithCustomHook login={"AdrianValdes"} />
      {/* <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList> */}
    </>
  );
}

export default App;
