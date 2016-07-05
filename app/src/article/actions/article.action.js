'use strict';

import store from '../../../store.js';

function addArticle(article) {
  return { type: 'ADD_ARTICLE', article }
}

function getTopicArticles(articles) {
  console.log('in get action', articles);
  return { type : 'GET_TOPIC_ARTICLES', articles}
}


function postRequestToServer(title, content, author) {
  return axios.post('http://localhost:8000/articles',
    {
      title,
      content,
      author
    })
}

export function asynPostMiddleware(title, content, author) {
  return function (dispatch) {
    return postRequestToServer(title, content, author).then(
      article => dispatch(addArticle(article))
    ).then(() => console.log(store.getState(), 'after post'))
    .catch(err => console.log(err));
  };
}

function setArticleTopic(topic) {
  return { type: 'SET_ARTICLE_TOPIC', topic }
}

function getRequestToServer(topic) {
  return axios.get('http://localhost:8000/articles' + '/topic/' + topic)
}

export function asynGetArticlesByTopicMiddle (topic) {
  return function (dispatch) {
    return getRequestToServer(topic).then((res) => {
      if(res.data.articles.length != 0)
        dispatch(getTopicArticles(res.data.articles));
      dispatch(setArticleTopic(topic));
    }).then(() => console.log('after choose topic', store.getState()))
    .catch(err => console.log(err));
  }
}


