import FeedbackItem from "./FeebackItem"
import PropTypes from 'prop-types' 


function FeedbackList({feedback, handleDelete}){
    return !!feedback.length ? (
        <div className="feedback-list">
            {feedback.map(item => (
                <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
            ))}
        </div>
    ) : (<h3>No feedback yet</h3>)
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList