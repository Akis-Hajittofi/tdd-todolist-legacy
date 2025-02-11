class TodoList {
  constructor() {
    this.id = 0
    this.items = []
    this.itemsShortened = []
  }

  create(str) {
    this.id++
    const item = { id: this.id, text: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  showAll() {
    // console.log('HERE', this.items)
    const newList = this.items
    newList.forEach((toDoItem) => {
      if (toDoItem.text.length > 20) {
        toDoItem.text = toDoItem.text.substring(0, 20)
        toDoItem.text += '...'
      }
    })
    this.itemsShortened = newList
    return newList
  }

  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  findBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
