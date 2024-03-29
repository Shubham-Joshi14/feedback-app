import Card from "./shared/Card"
import Button from "./shared/Button"
import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.trim().length <10){
            setBtnDisabled(true);
            setMessage("Text must be atleast 10 characters")
        }else{
            setBtnDisabled(false);
            setMessage(null)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length >= 10){
            const newFeedback= {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
        
    }

    return (<Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange}
                    type="text"
                    placeholder="Write a review"
                    value={text}
                    className='inputField'
                />
                <Button type="submit" isDisabled={btnDisabled}>
                    Submit
                </Button>
            </div>
        {message && <div className="message">{message}</div>}
        </form>
    </Card>)
}

export default FeedbackForm;