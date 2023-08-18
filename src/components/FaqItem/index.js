// Write your code here.
import './index.css'

const FaqItem = props => {
  const {itemDetails, change, values} = props
  const {id, questionText, answerText} = itemDetails
  const {ID0, ID1, ID2, ID3} = values
  console.log()

  const isClicked = () => {
    change(id)
  }

  return (
    <li className={('li', 'list')}>
      <div className="li">
        <div className="flex">
          <h1 className="question">{questionText}</h1>
          {ID0 && id === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="img"
              onClick={isClicked}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              className="img"
              onClick={isClicked}
            />
          )}
        </div>

        {ID0 && id === 0 ? <p className="question">{answerText}</p> : null}
        {ID1 && id === 1 ? <p className="question">{answerText}</p> : null}
        {ID2 && id === 2 ? <p className="question">{answerText}</p> : null}
        {ID3 && id === 3 ? <p className="question">{answerText}</p> : null}
      </div>
    </li>
  )
}

export default FaqItem
