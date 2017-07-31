import React, { Component } from 'react';

import './postForm.css';

class PostForm extends Component {
  render() {
    return (
      <form className="post-form-container">
        <div className="container is-fluid">
          <div className="field">
            <label className="label">标题</label>
            <div className="control">
              <input className="input" type="text" placeholder="请输入标题..." />
            </div>
          </div>

          <div className="field">
            <label className="label">分类</label>
            <div className="control">
              <input className="input" type="text" placeholder="请输入分类，如: javascript ..." />
            </div>
          </div>

          <div className="field">
            <label className="label">正文</label>
            <div className="control">
              <textarea className="textarea" placeholder="请输入正文..."></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary">提交</button>
            </div>
          </div>
        </div>

      </form>
    );
  }
}

export default PostForm;
