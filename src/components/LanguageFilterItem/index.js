// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  render() {
    const {id} = this.props
    return (
      <div className="row">
        <div className="row">{id}</div>
      </div>
    )
  }
}
export default LanguageFilterItem
