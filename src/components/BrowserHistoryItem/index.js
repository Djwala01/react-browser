import './index.css'

const BrowserHistoryItem = props => {
  const {historyList, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList
  const datatestid = () => {
    deleteUser(id)
  }
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="icon" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button className="button" data-testid="delete" onClick={datatestid}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryItem
