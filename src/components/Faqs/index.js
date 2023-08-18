// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {ID0: false, ID1: false, ID2: false, ID3: false}

  change = id => {
    if (id === 0) {
      this.setState(prevState => ({
        ID0: !prevState.ID0,
      }))
    } else if (id === 1) {
      this.setState(prevState => ({
        ID1: !prevState.ID1,
      }))
    } else if (id === 2) {
      this.setState(prevState => ({
        ID2: !prevState.ID2,
      }))
    } else {
      this.setState(prevState => ({
        ID3: !prevState.ID3,
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {isTrue} = this.state
    const values = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQS</h1>

          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                values={values}
                itemDetails={eachItem}
                key={eachItem.id}
                change={this.change}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
