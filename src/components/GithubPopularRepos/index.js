import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]
// Write your code here
class GithubPopularRepos extends Component {
  state = {data: [], id: 'ALL', language: 'All', loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {id} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${id}`,
    )
    const data = await response.json()
    const formattedData = data.popular_repos.map(item => ({
      id: item.id,
      avatarUrl: item.avatar_url,
      name: item.name,
      starsCount: item.stars_count,
      forksCount: item.forks_count,
      issuesCount: item.issues_count,
    }))
    this.setState({data: formattedData, loading: false})
  }

  render() {
    const {data, loading, id, language} = this.state
    console.log(id)
    return (
      <div className="bg">
        {loading ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1>Popular</h1>
            <div>
              <ul className="bar">
                {languageFiltersData.map(item => {
                  const getId = () => {
                    this.setState({
                      id: item.id,
                      language: item.language,
                      loading: true,
                    })
                    this.getData()
                  }

                  return (
                    <li key={item.id} className="list-item" value={item.id}>
                      <button onClick={getId} type="button">
                        {item.language}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="row">
              {data.map(item => (
                <RepositoryItem key={item.id} item={item} />
              ))}
            </div>
            <LanguageFilterItem id={id} language={language} />
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
