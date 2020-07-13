import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

export default class ToDoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center"> Todo List</h3>
                {items.map(item => {
                    return (
                        <ToDoItem 
                            key={item.id} 
                            title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        ></ToDoItem>
                    )
                })}
                <button 
                    type="button" 
                    className="btn btn-danger b text-uppercase mt-5"
                    onClick={clearList}
                >Delete Item</button>
            </ul>
        );
    }
}
