import React from 'react'
import PropTypes from "prop-types"
import Button from './Button'

const TodoItem = ({todo, del}) => {
    const delById = id => {
        del(id)
    }
    return (
        <div className='flex justify-between items-center text-white bg-mainBlue p-3 mb-2'>
            <p>{todo.title}</p>
            <div className='flex items-center gap-3'>
                <Button text="Edit" variant="success"/>
                <Button text="Delete" variant="warning"  action={() => delById(todo.id)} />
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del:PropTypes.func.isRequired,
}

export default TodoItem