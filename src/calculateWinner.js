function calculateWinner(squares,len,typeLen) {
  
  var mySquares=Array(len).fill(0).map((value,index)=>{
    var ind=index*len
    return squares.slice(ind,ind+len)
  })
  if(len<typeLen){
    return alert(typeLen+"子棋不能小于棋盘长度")
  }

  var typeLen1=Array(typeLen).fill(0)
  var isWin,isWin1
  for(var i=0;i<len;i++){
     for(var j=0;j<len;j++){

        if(j+typeLen<=len){
          
          isWin=typeLen1.every((value,index)=>mySquares[i][j+index])
          isWin1=typeLen1.every((value,index)=>mySquares[i][j]===mySquares[i][j+index])
          
          if(isWin&&isWin1) return mySquares[i][j]
       
        }
        if(i+typeLen<=len){

          isWin=typeLen1.every((value,index)=>mySquares[i+index][j])
          isWin1=typeLen1.every((value,index)=>mySquares[i][j]===mySquares[i+index][j])
          if(isWin&&isWin1) return mySquares[i][j]

    
        }
        if(i+typeLen<=len&&j+typeLen<=len){

          isWin=typeLen1.every((value,index)=>mySquares[i+index][j+index])
          isWin1=typeLen1.every((value,index)=>mySquares[i][j]===mySquares[i+index][j+index])
          if(isWin&&isWin1) return mySquares[i][j]

    
        }

        if(i+typeLen<=len&&j-typeLen>=0){

          isWin=typeLen1.every((value,index)=>mySquares[i+index][j-index])
          isWin1=typeLen1.every((value,index)=>mySquares[i][j]===mySquares[i+index][j-index])
          if(isWin&&isWin1) return mySquares[i][j]
           console.log(isWin,isWin1,""); 
         
        }
        
     }
  }

  return null;
}

export default calculateWinner