const submit = document.querySelector("#form")
const initialPos = document.querySelector("#initialPos")
const endPos = document.querySelector("#endPos")

const container = document.querySelector("#container")
const result = document.querySelector("#result")

submit.addEventListener("submit",(event)=>{
    event.preventDefault()
    let value1 = parseInt(document.querySelector("#x1").value)
    let value2 = parseInt(document.querySelector("#y1").value)
    let value3 = parseInt(document.querySelector("#x2").value)
    let value4 = parseInt(document.querySelector("#y2").value)
    let shortPath = knightMoves([value1,value2],[value3,value4])
    let shortPathString = ""
    initialPos.textContent = "["+value1+","+value2+"]"
    endPos.textContent = "["+value3+","+value4+"]"
    for(let i in shortPath)
    {
        shortPathString += "["+shortPath[i]+"]"
    }
    result.textContent = "Shortest Path:"+shortPathString
    
    container.appendChild(result)
})
class Node {
    constructor(position) {
      this.position = position;
      this.possibleMoves = createMoves(position)
      this.parent = null
  }
  }

const createMoves = (position)=>{
    let operationArray = [1,2,2,1,2,-1,1,-2,-1,-2,-2,-1,-1,-2,-2,1,-1,2]
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
console.log(createMoves([4,5]))
console.log(createMoves([6,4]))
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