
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix){
    const n = matrix.length;
    const arr = [];
    for (let i = 0; i < n; i++) {
        if(i%2===0){
        matrix[i].forEach((element) => arr.push(element));
      }
        if(i%2!==0){
            matrix[i].reverse().forEach((element) => arr.push(element));
        }
    }
    
  return arr;
}
else return []

}
