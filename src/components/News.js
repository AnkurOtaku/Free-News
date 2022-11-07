import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfinieScroll from 'react-infinite-scroll-component'

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',
    querry: '',
    newsFrom: 1,
    newsTo: new Date().getDate()
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    querry: PropTypes.string,
    newsFrom: PropTypes.number,
    newsTo: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category} | Free News`;
  }

  async updateNews() {
    this.setState({ loading: true })
    this.props.updateProgress(10);
    let url = this.props.category === 'search' ?
      `https://newsapi.org/v2/everything?q=${this.props.querry}&from=2022-10-${this.props.newsFrom}&to=2022-10-${this.props.newsTo}&sortBy=popularity&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${this.state.page}&pageSize=${this.props.pageSize}`
      : `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.updateProgress(40);
    let parsedData = await data.json();
    this.props.updateProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.updateProgress(100);
  }

  fetchMoreData = async () => {
    let url = this.props.category === 'search' ?
      `https://newsapi.org/v2/everything?q=${this.props.querry}&from=2022-10-${this.props.newsFrom}&to=2022-10-${this.props.newsTo}&sortBy=popularity&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      : `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),      
      totalResults: parsedData.totalResults
    })
  }

  // to fetch latest news
  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <div id='top'>
        <h2 className='text-center m-3'>News Highlights</h2>
        {this.state.loading && <Loading/>}
        <InfinieScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className='row'>
              {this.state.articles.map((element, index) => {
                return <div className='col-md-4 mb-3' key={index}>
                  <NewsItem title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    content={element.content}
                    newsUrl={element.url} />
                </div>
              })}
            </div>
          </div>
        </InfinieScroll>
        <a href="#top" className="top"><span>&#x27A3;</span></a>
      </div>
    )
  }
}