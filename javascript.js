//first of all, create a gameboard

class Node {
    constructor(position) {
      this.position = position;
      this.possibleMoves = createMoves(position)
      this.parent = null
  }
  }

//idea for making moves from the knight
//first get the original positin
const createMoves = (position)=>{
    let operationArray = [2,-1,2,1,1,2,1,-2,-2,1,-2,-1,-1,2,-1,-2]
    let possibleMoves = [];
    for(let i = 0; i<16 ;i=i+2)
    {   let positionCopy = []
        positionCopy[0] = position[0]
        positionCopy[1] = position[1] 
        positionCopy[0] = positionCopy[0]+operationArray[i]
        positionCopy[1] = positionCopy[1]+operationArray[i+1]
        if(positionCopy[0] >= 0 && positionCopy[1] >= 0 && positionCopy[0] <= 7 && positionCopy[1] <= 7)
        {
        possibleMoves.push(positionCopy);
        }
    }
    return possibleMoves
}

const avoidRepetition = (current,repeatedNode)=>{
    for(let i in repeatedNode)
    {
        
        if(current[0] === repeatedNode[i][0] && current[1] === repeatedNode[i][1])
        {
            return true
        } 
    }
        
}
const createGraph = (position,destination)=>{
    let newNode = new Node(position)
    let queue = [newNode]
    let result = []
    let repeatedNodes = []
    while(queue.length !== 0)
    {
        
        let current = queue.shift()
        if(!avoidRepetition(current.position,repeatedNodes)){
            result.push(current)
            repeatedNodes.push(current.position)
        }
        if(current.position[0] === destination[0] && current.position[1] === destination[1])
        {
            return current
        }
        for(let i in current.possibleMoves)
        {
            let newNode = new Node(current.possibleMoves[i])
            newNode.parent = current            
            queue.push(newNode)

        }
  
        }
    }

//[0,0]->[2,1]->[1,2](not desired)->[4,0](not desired)->[4,2](not desired)->[3,3]
const knightMoves = (position,destination)=>{
    let destiny = createGraph(position,destination)
    let shortestPath = []
    while(destiny !== null)
    {
        shortestPath.unshift(destiny.position)
        destiny = destiny.parent
    }
    return shortestPath
}
console.log(knightMoves([3,3],[4,3]))