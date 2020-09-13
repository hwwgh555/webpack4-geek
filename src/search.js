import React from 'react'
import ReactDOM from 'react-dom'
import './search.css'
// import './search.less'
import styles from './search.less'


class Search extends React.Component{
  render() {
    return <div className={['search-text', styles.border].join(' ')}>Search Text--react</div>
  }
}

ReactDOM.render(
  <Search />,
  document.querySelector('#root'),
)