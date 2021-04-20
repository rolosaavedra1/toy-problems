/**
 * @param {number[][]} wall
 * @return {number}
 */

//input: array of brick lengths
//output: least number of bricks crossed

//each row has slots = sum(row[0])
//go down each row and keep track of how many bricks are present in each slot column
// keep track of smallest value for a slot column

var leastBricks = function(wall) {
    const rowC = wall.length
    if (!rowC)  return 0
    
    const firstRow = wall[0]
    let rowWidth = firstRow.reduce((sum, acc) => sum + acc, 0)
    
    
    // seam point => count of seam point
    const seamMap = new Map()
    for (const row of wall.values()) {
        let seam = 0
        for (const width of row.values()) {
            seam += width
            if (seam === rowWidth)  break
            
            if (!seamMap.has(seam)) 
                seamMap.set(seam, 0)
                
            let count = seamMap.get(seam)
            count++
            seamMap.set(seam, count)
        }
    }
    
    
    const seamCountItor = seamMap.values()
    const maxSeamCount = Math.max(...seamCountItor, 0)
    let result = rowC - maxSeamCount
    return result
};