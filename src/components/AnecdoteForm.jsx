import { useDispatch } from "react-redux"
import { createNewAnecdote } from "../redux/reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

const addAnecdote = (event) => {
    event.preventDefault() 
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNewAnecdote(content))
}

return (
    <form onSubmit={addAnecdote}>
        <h2>Create new</h2>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
    </form>
    )
}
export default AnecdoteForm