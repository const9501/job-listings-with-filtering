import React from 'react';
import Badge from "../UI/Badge";

const JobItem = ({item, addFilterHandler}) => {

  const badges = [item.role, item.level, ...item.languages, ...item.tools]

  return (
	<div className='job-list__item'>
	  <img src={item.logo} alt=""/>

	  <div className="job-list__body">


		<div className="job-list__body-title">
		  <div className="job-list__body-company">{item.company}</div>
		  {item.new ? <div className='job-list__body-new-mark'>NEW!</div> : null}
		  {item.featured ? <div className='job-list__body-featured-mark'>FEATURED</div> : null}
		</div>

		<div className="job-list__body-position">{item.position}</div>

		<div className='job-list__body-info'>
		  <div>{item.postedAt}</div>
		  <div>{item.contract}</div>
		  <div>{item.location}</div>
		</div>

	  </div>

	  <div className="job-list__skills">
		{badges.map((item, index) => {
		  return <Badge
			key={index}
			onClick={() => console.log(123)}
		  >{item}</Badge>
		})}
	  </div>
	</div>
  );
};

export default JobItem;