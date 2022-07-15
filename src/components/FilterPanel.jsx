import React from 'react';
import Badge from "../UI/Badge";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, removeFilter} from "../store/filters/filter-actions";
import {selectAllFilters} from "../store/filters/filter-selectors";

const FilterPanel = () => {

  const dispatch = useDispatch()
  const filters = useSelector(selectAllFilters)
  
  const removeBadgeHandler = (filter) => {
	console.log(filter);
	dispatch(removeFilter(filter))
  }

  if (!filters.length) return null

  return (
	<div className='filter-panel'>

	  <div className='badge-container'>
		{
		  filters.map((filter, index) => {
			return (
			  <Badge key={index} variant='cleanable' onClear={removeBadgeHandler}>{filter}</Badge>
			)
		  })
		}
	  </div>



	  <div className='filter-panel__clear-btn' onClick={() => dispatch(clearFilter)}>Clear</div>
	  
	</div>
  );
};

export default FilterPanel;