// Write your code here
import {Component} from 'react'
import './index.css'

const starImg = 'https://assets.ccbp.in/frontend/react-js/stars-count-img.png'
const forkImg = 'https://assets.ccbp.in/frontend/react-js/forks-count-img.png'
const issuesCountImg =
  'https://assets.ccbp.in/frontend/react-js/issues-count-img.png'

class RepositoryItem extends Component {
  render() {
    const {item} = this.props
    const {avatarUrl, name, starsCount, forksCount, issuesCount} = item
    return (
      <div className="card">
        <img src={avatarUrl} className="logo" alt="logo" />
        <h1>{name}</h1>
        <div className="small-row">
          <img src={starImg} alt="stars" className="icon" />
          <p>{starsCount}</p>
        </div>
        <div className="small-row">
          <img src={forkImg} alt="forks" className="icon" />
          <p>{forksCount}</p>
        </div>
        <div className="small-row">
          <img src={issuesCountImg} alt="open-issues" className="icon" />
          <p>{issuesCount}</p>
        </div>
      </div>
    )
  }
}
export default RepositoryItem
