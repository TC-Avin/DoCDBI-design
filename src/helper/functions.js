export const paginate = (page,perpageRow,data)=>{
    let newRow = data.slice((page-1)*perpageRow,(page)*perpageRow)      
    return newRow  
 }