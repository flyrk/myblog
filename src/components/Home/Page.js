import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import './page.css';

class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createTime: PropTypes.object.isRequired
  };

  render() {
    const { title, content, createTime } = this.props;
    const time = `${createTime.year}-${createTime.month}-${createTime.date}  ${createTime.hour}:${createTime.minutes}`;
    return (
      <section className="section page-container">
        <div className="container">
          <h1 className="title">{title}</h1>
          <span className="time-info">{time}</span>
          <div className="markdown-body markdown-rendered-content"
            dangerouslySetInnerHTML={{__html: marked(content)}} />
        </div>
      </section>
    );
  }
}

export default Page;
