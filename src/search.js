import React from 'react'
import ReactDOM from 'react-dom'
import './search.css'
// import './search.less'
import styles from './search.less'
import pic from './images/pic.png'


class Search extends React.Component{
  render() {
    return <div className={['search-text', styles.border].join(' ')}>
      <img src={pic} />
      Search Text--react;搜索文字
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.querySelector('#root'),
)