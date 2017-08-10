import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';

class Categories extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: {}
    };
  }

  componentWillMount() {
    const mapCategories = {}, categories = {};
    this.props.posts.forEach(post => {
      if (!mapCategories[post.categories]) {
        mapCategories[post.categories] = 1;
        categories[post.categories] =  [post];
      } else {
        categories[post.categories].push(post);
      }
    });
    this.setState({
      categories
    });
  }

  render() {
    const { categories } = this.state,
              categoriesList = [];
    for (let key in categories) {
      categoriesList.push(key);
    }
    const singleList = categoriesList.map((title, id) => (
      <div key={id} className="categories-singlelist" id={title}>
        <h1>{title}</h1>
        <ul>
          {categories[title].map((post, key) => (
            <li key={key}>
              <Link to={'/articles/'+post.createTime.year+'/'+post.createTime.month+'/'+post.createTime.date+'/'+post.title.split(' ').join('-')}>
                {post.title}
              </Link>
              <span>{post.createTime.year}-{post.createTime.month}-{post.createTime.date}  {post.createTime.hour}:{post.createTime.minutes}</span>
            </li>
          ))}
        </ul>
      </div>
    ));
    return (
      <div className="categories-container">
        <ul className="categories-main-list">
          {categoriesList.map((categorie, id) => (<li key={id}><a href={'#' + categorie}>{categorie}</a></li>)) }
        </ul>

        <div className="categories-list">
          {singleList}
        </div>
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateProps)(Categories);
