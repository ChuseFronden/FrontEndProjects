import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const TodoTable = props => {
        const columns = [
        {
        Header: 'Date',
        accessor: 'date',
        }, 

        {
        Header: 'Description',
        accessor: 'description',
        },
        {
            Header: '',
            accessor: 'delete',
          Cell: row => <button onClick={() => props.deleteTodo(row)}>Delete</button>
          
            }
    ]

return (
    <div>
    <ReactTable data={props.todos} defaultPageSize={15} columns = {columns} filterable = {true} />
    </div>
    );
}


export default TodoTable;