import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './index.css';

class Archieve extends Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    articles: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isActived: false
    };
  }

  handleOnClick() {
    this.setState((prevState, props) => ({
      isActived: !prevState.isActived
    }));
  }

  render() {
    const { year, month, articles } = this.props;
    const timelineList = articles.map((article, id) => (
      <Link to={'/articles/'+year+'/'+month+'/'+article.createTime.date+'/'+article.title.split(' ').join('-')} key={id}>
        <li>
          {article.title}
          <span>{article.createTime.year}-{article.createTime.month}-{article.createTime.date} {article.createTime.hour}:{article.createTime.minutes}</span>
        </li>
      </Link>
    ));
    return (
      <div className="timeline-wrap">
        <h2 className="timeline-title" onClick={this.handleOnClick.bind(this)}>{year}年{month}月</h2>
        <ul className={classnames("timeline-content", {"is-active": this.state.isActived})}>
          {timelineList}
        </ul>
        <hr />
      </div>
    );
  }
}

export default Archieve;
