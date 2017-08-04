import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timeline from './Timeline';
import { getArchieves } from '../../actions/archieveActions';

import './index.css';

class Archieve extends Component {
  static propTypes = {
    getArchieves: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      timelineForm: []
    };
  }

  componentWillMount() {
    this.props.getArchieves().then(res => {
      const data = res.data;
      let timelineForm = [];
      data.forEach((posts) => {
        let timeline = {};
        timeline.year = posts.createTime.year;
        timeline.month = posts.createTime.month;
        timeline.articles = posts;
        timelineForm.push(timeline);
      });
      this.setState({ timelineForm });
    },
    (err) => this.setState({ errors: err.response.data })
    );
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
        { this.state.errors &&
          <div className='message is-danger'>
            <div className="message-body">{this.state.errors.err}</div>
          </div>}
        { timeline }
      </div>
    );
  }
}

export default connect(null, { getArchieves })(Archieve);
