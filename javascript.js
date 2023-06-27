//first of all, create a gameboard
const gameboard = ((arr)=>
{
    {
        let arr = [];
        let columnsize = 8

            let value = 0;
            // creating two-dimensional array
            for (let i = 0; i < columnsize; i++) {
                arr[i] = [];
            for (let j = 0; j < columnsize; j++) {
                arr[i][j] = j;
            }
            }
            return {arr}
    }
})();
class Knight {
    constructor(position)
    {
        this.position = position
        this.possibleMoves = createMoves(position)
    }
}
console.log(gameboard.arr);
//idea for making moves from the knight
//first get the original positin
let position = [7,5]
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

let newKnight = new Knight([3,4])
const moveKnight = ()=>
{
    newKnight.position = newKnight.possibleMoves[]
}