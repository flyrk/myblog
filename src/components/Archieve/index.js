import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timeline from './Timeline';

import timeSort from '../../utils/timeSort';
import './index.css';

class Archieve extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      timelineForm: []
    };
  }

  timelineFilter(form) {
    let hashTime = {}, i = 0;
    while (i < form.length) {
      if (!hashTime[form[i].year]) {
        hashTime[form[i].year] = [];
        hashTime[form[i].year].push(form[i].month);
        i++;
      } else if (~hashTime[form[i].year].indexOf(form[i].month)) {
        form.splice(i, 1);
      } else {
        hashTime[form[i].year].push(form[i].month);
        i++;
      }
    }
  }

  sortTimeline(t1, t2) {
    if (t1.year > t2.year) {
      return -1;
    } else if (t1.year === t2.year) {
      if (t1.month > t2.month) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  }

  formTimeline = (form, articles) => {
    this.timelineFilter(form);
    form.sort(this.sortTimeline);
    form.forEach((timeline) => {
      timeline.articles = [];
      articles.forEach(article => {
        if (article.createTime.year === timeline.year
          && article.createTime.month === timeline.month) {
          timeline.articles.push(article);
        }
      });
      timeline.articles.sort(timeSort);
    });
  };

  componentWillMount() {
      const data = this.props.posts;
      let timelineForm = [], articles = [];
      data.forEach((posts) => {
        let timeline = {};
        timeline.year = posts.createTime.year;
        timeline.month = posts.createTime.month;
        articles.push(posts);
        timelineForm.push(timeline);
      });
      this.formTimeline(timelineForm, articles);
      this.setState({ timelineForm });
  }

  render() {
    const timeline = this.state.timelineForm.map((timeline, id) => (
      <Timeline
        key={id}
        year={timeline.year}
        month={timeline.month}
        articles={timeline.articles}
      />
    ));
    return (
      <div className="archieve-container">
        { this.state.errors.err &&
          <div className='message is-danger'>
            <div className="message-body">{this.state.errors.err}</div>
          </div>}
        { timeline }
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateProps)(Archieve);
