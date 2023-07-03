//first of all, create a gameboard

class Node {
    constructor(position) {
      this.position = position;
      this.possibleMoves = null
      
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

const createGraph = (position,destination)=>{
    let newNode = new Node(position)
    let queue = [newNode]
   
    let historyMoves = []
    newNode.possibleMoves = createMoves(position)
    while(queue.length !== 0)
    {
        
        let current = queue.shift()
        console.log(current.position)
        if(current.position[0] === destination[0] && current.position[1] === destination[1])
        {
            return current
        }

        for(let i in current.possibleMoves)
        {

            let newNode = new Node(current.possibleMoves[i])
            
            newNode.possibleMoves = createMoves(current.position)
            queue.push(newNode)

        }
    }
}
console.log(createGraph([0,0],[3,3]))
const knightMoves = (position,endPoint)=>{

}