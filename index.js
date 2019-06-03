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
  
}
