import { v4 as uuidv4 } from 'uuid'
import {useState} from 'react'
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import feedbackData from './Data/FeedbackData'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

function App(){
    const [feedback, setFeedback] = useState([])

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    return (
    <>
        <Header />
        <div className = "container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback}
                handleDelete =  {deleteFeedback}/>
        </div>
    </>
    )
}

export default App