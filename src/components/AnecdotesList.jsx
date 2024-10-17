import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from "../redux/reducers/anecdoteReducer"
import { setNotification, clearNotification } from "../redux/reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const vote = (id) => {
        const anecdote = anecdotes.find(a => a.id === id)
        dispatch(voteAnecdote(id))
        dispatch(setNotification(`You voted for "${anecdote.content}"`))

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
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            )}
        </div>
        )
    }

export default AnecdoteList