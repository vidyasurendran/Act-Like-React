
const deleteAction = (record) => {
    return {type : 'delete', id: record.id}
  }

export default deleteAction
  