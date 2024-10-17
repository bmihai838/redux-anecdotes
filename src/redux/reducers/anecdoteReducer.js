import { v4 as uuidv4 } from "uuid"

const initialState = [
    { id: '1', content: 'If it hurts, do it more often', votes: 0 },
    { id: '2', content: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { id: '3', content: 'The first 90 percent of the code accounts for the first 90 percent of the development time.', votes: 0 },
    { id: '4', content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { id: '5', content: 'Premature optimization is the root of all evil.', votes: 0 },
    { id: '6', content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
]

export const voteAnecdote = (id) => {
    return {
        type: 'VOTE_ANECDOTE',
        data: { id }
    }
}

export const createAnecdote = (content) => {
    return {
        type: 'CREATE_ANECDOTE',
        data: {
            id: uuidv4(),
            content,
            votes: 0
        }
    }
}

const anecdoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE_ANECDOTE':
            const id = action.data.id
            const anecdoteToChange = state.find(a => a.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(anecdote => 
                anecdote.id !== id ? anecdote : changedAnecdote
            )
        case 'CREATE_ANECDOTE':
            return [...state, action.data]
        default:
            return state
    }
}

export default anecdoteReducer 