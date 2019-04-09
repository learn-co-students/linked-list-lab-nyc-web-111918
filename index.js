function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let currNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
      currNode = next(currNode, collection)
    }
    return currNode
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  }
  else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList) {
  let currNode = headNode(linkedList, collection)
  let index = 0
  while (currNode !== node) {
    currNode = next(currNode, collection)
    index++
  }
  return index
}

function insertNodeAt(index, address, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection)
  let nextNodeAddress = addressAt(nextNode, linkedList, collection)
  prevNode.next = address
  let newNode = collection[address]
  newNode.next = nextNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let foundNode = nodeAt(index - 1, linkedList, collection)
  let prevNode = foundNode
  foundNode = next(foundNode, collection)
  prevNode.next = foundNode.next
}
