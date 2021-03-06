import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import SingleTopicComponent from './singletopic.component.jsx';
import HeadSliderComponent from './headslider.component.jsx';

require('../../../styles/category.style.css');
require('../../../styles/headslider.style.css');


class CategoryComponent extends React.Component{

	constructor(){
		super();
		this.state = {topics : []};
	}
	componentDidMount() {
	 	$.ajax({
            url: 'http://localhost:8000/topics',
            dataType: 'json',
            type: "GET",
            cache: false,
            success: function(data) {
              this.setState({ topics :  data});
            }.bind(this),
            error: function(xhr, status, err) {

              console.error(error, err.toString());
            }.bind(this)
          });
	}

	render(){

	  let topics = this.state.topics.map((topic) => {
	  	return (

		  			<div className="mdl-cell mdl-cell--4--col" key={topic._id}>

				      	<SingleTopicComponent {...this.props} imgsrc={topic.img} topic={topic.topicName} description={topic.description} effect={topic.effect}/>

					</div>


	  		   )
	  });

	  let topics1 = this.state.topics.map((topic) => {
	  	return (

		  			<div className="mdl-cell mdl-cell--12--col" key={topic._id}>

				      	<SingleTopicComponent {...this.props} imgsrc={topic.img} topic={topic.topicName} description={topic.description} effect={topic.effect}/>

					</div>


	  		   )
	  });


	  return (
			    <div>
			    <HeadSliderComponent />
				<ul className="demo-list-item mdl-list category-ul largedisplay">
					 <li className="mdl-grid">
				      {topics}
			   	 	</li>
				</ul>

				<ul className="demo-list-item mdl-list category-ul smalldisplay">
					 <li className="mdl-grid">
				      {topics1}
			   	 	</li>
				</ul>
				</div>
			)
	}

}

export default CategoryComponent;