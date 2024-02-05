import { RiDeleteBin6Line } from 'react-icons/ri'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}){

    return (
        <Card >
                <div className="num-display">{item.rating}</div>
                <button onClick={() => handleDelete(item.id)} className="close">
                    <RiDeleteBin6Line color='purple' size={20}/>
                </button>
                <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;