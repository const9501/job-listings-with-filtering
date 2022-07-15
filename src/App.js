import Header from "./components/Header";
import JobList from "./components/JobList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPositions} from "./store/positions/position-actions";
import data from './mock/data.json';
import FilterPanel from "./components/FilterPanel";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPositions(data))
  }, [])

  return (
    <>
      <Header/>
      <div className='container'>
        <FilterPanel/>
        <JobList/>
      </div>
    </>
  );
}

export default App;
