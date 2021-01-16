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

function App() {
  return (
    <>
      {/*  <UseEffectHook /> */}
      {/*  <UseEffectHook1 /> */}
      {/*   <Counter /> */}
      {/* <Greeting name={"peter"} /> */}
      {/*  <CounterStep /> */}
      {/* <SearchResults /> */}
      {/* <SearchResults1 /> */}
      {/* <SearchResultsCallback /> */}
      {/* <AddColorForm /> */}
      {/* <WordCount>You are not going to believe this</WordCount> */}
      <RequestGithubUser />
    </>
  );
}

export default App;
