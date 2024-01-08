// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}
  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }
  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }
  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate
            <span> {count1} </span>
            mangoes
            <span> {count2} </span>
            bananas
          </h1>
          <div className="img-container">
            <div className="img-card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="img-card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
