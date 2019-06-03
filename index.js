function getName(node){
  return node["name"]
}

//function should return head node of linked list, given a key
function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let current = headNode(linkedList, collection)
  for(let i=0; i<index; i++){
    current = next(current, collection)
  }
  return current
}

function addressAt(index, linkedList, collection){
  if (index===0){
    return linkedList
  }else{
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let current = headNode(linkedList, collection)
  let counterIndex = 0
  while(current !== node){
    counterIndex++
    current = next(current, collection)
  }
  return counterIndex
}

function insertNodeAt(index, newAddress, linkedList, collection){
  let prev = nodeAt(index-1, linkedList, collection)
  let next = nodeAt(index, linkedList, collection)

  let prevInd = indexAt(prev, collection, linkedList)
  let nextInd = indexAt(next, collection, linkedList)

  let prevAddress = addressAt(prevInd, linkedList, collection)
  let nextAddress = addressAt(nextInd, linkedList, collection)

  prev.next = newAddress
  let newNode = collection[newAddress]

  newNode.next = nextAddress
}

function deleteNodeAt(ind, linkedList, collection){
  let prevNode;
  let currentNode = headNode(linkedList, collection)

  for(let i=0; i<ind; i++){
    prevNode = currentNode
    currentNode = next(currentNode, collection)
  }
  prevNode.next = currentNode.next
}
