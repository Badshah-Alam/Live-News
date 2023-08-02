import React, { Component } from "react";

export default class NewsCard extends Component {
  render() {
    const { imageSrc, title, description, time, newsurl, author, source } =
      this.props;
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageSrc} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 55)}...</h5>
              <p className="card-text">{description.slice(0, 60)}...</p>
              <p>
                <a href={newsurl} target="_blank">
                  Read More &gt;&gt;&gt;
                </a>
              </p>
              <p>
                {author} via '{source}'
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {new Date(time).toLocaleString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
