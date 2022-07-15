import React from 'react';
import JobItem from "./JobItem";
import {useSelector} from "react-redux";
import {selectFilteredPositions} from "../store/positions/position-selectors";
import {selectAllFilters} from "../store/filters/filter-selectors";


const JobList = () => {

  const currentFilters = useSelector(selectAllFilters)

  const data = useSelector(state => selectFilteredPositions(state, currentFilters))

  return (
	<div>
		<div className="job-list">
		  {
			data.map((item) => {
			  return (
				<JobItem key={item.id} item={item}/>
			  )
			})
		  }
		</div>
	</div>
  );
};

export default JobList;