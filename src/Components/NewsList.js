import React, { Component } from "react";
import NewsCard from "./NewsCard";
import placeholder from "./placeholder.jpg";
import Placeholder from "./Placeholder";

export default class NewsList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      articles: [],
      pageNumber: 1,
    };
  }

  getData = async (url) => {
    this.setState({
      loading: true,
      articles: [],
      pageNumber: this.state.pageNumber,
    });
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    this.setState({
      loading: false,
      articles: data.articles,
      pageNumber: this.state.pageNumber + 1,
      totalResults: data.totalResults,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${this.state.pageNumber}&category=${this.props.category}`;
    this.getData(url);
  }

  nextPageHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${
      this.state.pageNumber + 1
    }&category=${this.props.category}`;
    this.getData(url);
  };

  prevPageHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${
      this.state.pageNumber - 1
    }&category=${this.props.category}`;
    this.getData(url);
  };

  newsSearch = async () => {
    let keyword = document.getElementById("keyword");
    // console.log(keyword.value);
    let url = `https://newsapi.org/v2/top-headlines?&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${
      this.state.pageNumber - 1
    }&q=${keyword.value}`;
    this.getData(url);
  };

  render() {
    return (
      <div className="container">
        <div className="top-bar d-flex justify-content-between align-items-center">
          <div className="left-section">
            <h1 className="my-3 text-center">Taaza Khabar</h1>
            <p className="lead text-center">
              See the latest news from all-over the world
            </p>
          </div>
          <div className="right-section d-flex flex-column">
            <input
              type="text"
              name=""
              id="keyword"
              className="my-2 form-control"
              placeholder="Search News"
            />
            <input
              type="submit"
              className="btn btn-outline-success"
              value="Search"
              onClick={this.newsSearch}
            />
          </div>
        </div>

        <div className="row">
          {this.state.loading && <Placeholder />}
          {this.state.articles.map((element) => {
            return (
              <div key={element.title} className="col-md-6 col-lg-4">
                <NewsCard
                  title={element.title}
                  newsurl={element.url}
                  description={
                    element.content
                      ? element.content
                      : "No details are found at moment"
                  }
                  time={element.publishedAt}
                  imageSrc={
                    element.urlToImage ? element.urlToImage : placeholder
                  }
                  author={element.author ? element.author : "Unknown Author"}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="pagination-btns my-5 d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.pageNumber <= 1}
            onClick={this.prevPageHandler}
          >
            Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={
              this.state.pageNumber >= Math.ceil(this.state.totalResults / 9)
            }
            onClick={this.nextPageHandler}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
