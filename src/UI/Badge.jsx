import React from 'react';
import {useDispatch} from "react-redux";
import {addFilter} from "../store/filters/filter-actions";
import {ReactComponent as RemoveIcon} from "../assets/images/icon-remove.svg";


const Badge = ({children, variant = 'basic', onClear, onClick}) => {

  const dispatch = useDispatch()

  return (
	<div className={variant === 'cleanable' ? 'badge badge-cleanable' : 'badge'}>

	  <div className='badge__title' onClick={() => dispatch(addFilter(children))}>
		<span>{children}</span>
	  </div>
	  {variant === 'cleanable' && <div className='badge__remover' onClick={() => onClear(children)}><RemoveIcon/></div>}
	</div>
  );
};

export default Badge;