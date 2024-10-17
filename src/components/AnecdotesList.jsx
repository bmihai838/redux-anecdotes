import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../redux/reducers/anecdoteReducer"
import { clearNotification, setNotificationWithTimeout } from "../redux/reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotificationWithTimeout(`You voted for "${anecdote.content}"`, 5))

        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000);
    }

    const filteredAnecdotes = anecdotes.filter(anecdote => {
        if (filter === '') return true
        return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })

    const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes) 

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>has {anecdote.votes} votes</div>
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            )}
        </div>
        )
    }

export default AnecdoteList