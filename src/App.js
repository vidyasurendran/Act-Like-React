import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import deleteAction from './actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (record) => dispatch(deleteAction(record))
})

const mapStateToProps = (state) => ({
  data: state
})
const App = ({data, onClick}) => {
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'name'
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: 'Updated',
      dataIndex: 'updated_at',
      key: 'updated',
    }, {
      title: 'Created',
      dataIndex: 'created_at',
      key: 'created',
    }, {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      render : (text,record) => <span><a onClick={() => onClick(record)}>Delete</a></span>
    }]

    //render : (text,record) => <span><a href="#" onClick={() => onClick(record)}>Delete</a></span>
    //render : () => <span><a href="#">Delete</a></span>
    return (
      <div className="App">
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }

//export default App;
//export default connect(state => ({data: state}))(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
