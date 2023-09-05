// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHideApp extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  changeFirstNameVisibility = () => {
    const {isFirstNameVisible} = this.state

    this.setState({isFirstNameVisible: !isFirstNameVisible})
  }

  changeLastNameVisibility = () => {
    const {isLastNameVisible} = this.state

    this.setState({isLastNameVisible: !isLastNameVisible})
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state
    return (
      <div className="bg-container">
        <div className="show-hide-card-con">
          <h1 className="heading">Show/Hide</h1>

          <div className="show-hide-items-con">
            <div className="show-hide-item-con">
              <button onClick={this.changeFirstNameVisibility} type="button">
                Show/Hide Firstname
              </button>
              {isFirstNameVisible && (
                <div className="show-hide-op-con">
                  <p className="first-name">Joe</p>
                </div>
              )}
            </div>

            <div className="show-hide-item-con">
              <button onClick={this.changeLastNameVisibility} type="button">
                Show/Hide Lastname
              </button>
              {isLastNameVisible && (
                <div className="show-hide-op-con">
                  <p className="last-name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHideApp
