// Write your code here
import './index.css'

const MessageBox = props => {
  const {isLoggedIn} = props
  const result = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{result}</h1>
}

export default MessageBox
