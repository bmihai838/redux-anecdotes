import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../redux/reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()


const vote = (id) => {
    dispatch(voteAnecdote(id))
}

const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes) 

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