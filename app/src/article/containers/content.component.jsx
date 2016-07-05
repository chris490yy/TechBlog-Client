'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Articles from '../components/articles.component.jsx';
import PostComponent from '../components/post.component.jsx';
import store from '../../../store.js';

import * as articleActions from '../actions/article.action.js';
class ContentComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      console.log(this.props.topic)
      if(this.props.topic === 'POST_PAGE'){
          return (
              <div>
                <p>post</p>
                <PostComponent />
              </div>
            )
      } else {
          return (
                  <div>
                    <p>not post</p>
                    <Articles />
                  </div>
                 )
      }
    }
}

export default ContentComponent
