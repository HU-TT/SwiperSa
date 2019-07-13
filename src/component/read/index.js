import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './index.css'
import axios from 'axios'
import { TopCon, BottomCon, BookCon } from './style'
import Book1 from '../../images/book1.png'
import Book2 from '../../images/book2.png'

class Read extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      page: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    axios.get('http://dev.yuntun-bj.com/webcore/merchantli/readplan/fetch_book_list?page_no=1&page_size=10', {})
      .then(res => {
        let data = res.data.data.book_list
        let arr = []
        let itemArr = []
        for (let i = 1; i < (data.length / 2) + 1; i++) {
          data.forEach((item, index) => {
            if (index === i || index === (i + 1)) {
              itemArr = [...itemArr, item]
            }
          })
          arr = [...arr, itemArr]
          itemArr = []
        }
        this.setState({
          list: arr
        })
      })
  }

  handleChange (index) {
    console.log(index)
    if (index === 4) {
      axios.get(`http://dev.yuntun-bj.com/webcore/merchantli/readplan/fetch_book_list?page_no=${this.state.page}&page_size=10`)
        .then(res => {
          let data = res.data.data.book_list
          let arr = []
          let itemArr = []
          for (let i = 1; i < (data.length / 2) + 1; i++) {
            data.forEach((item, index) => {
              if (index === i || index === (i + 1)) {
                itemArr = [...itemArr, item]
              }
            })
            arr = [...arr, itemArr]
            itemArr = []
          }
          console.log(arr)
          this.setState((prevState) => ({
            page: prevState.page,
            list: [...prevState.list, ...arr]
          }), () => {
            console.log(this.state.list)
          })
        })
    }
  }

  render () {
    return (
      <Carousel
        autoplay={false}
        // infinite
        dots={false}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => this.handleChange(index)}
      >
        {this.state.list.map((item, index) => (
          <BookCon className='con' key={index}>
            {item.map((item,index) => {
              if (index === 0) {
                return (<TopCon>
                  <img src={item.group_qrcode} alt="" className="book"/>
                  <dl className="info"><dt className="title">{item.book_name}</dt>
                  <dd>{item.book_summary}</dd>
                  </dl>
                  </TopCon>)
              }
              if (index === 1) {
                return (<BottomCon>
                  <img src={item.group_qrcode} alt="" className="book"/>
                  <dl className="info">
                  <dt className="title">{item.book_name}</dt>
                  <dd>{item.book_summary}</dd>
                  </dl>
                  </BottomCon>)
              }
              // index === 0 ? (
              //
              // ) : ()
            })}
          </BookCon>
        ))}
      </Carousel>
    )
  }
}

export default Read
