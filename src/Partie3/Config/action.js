export const addTask =(newTask)=>{
    return {
        type:"Ajouter", 
        payload:newTask }
}
export const updTask =(upTask )=>{
    return {
        type:"Modifier",
        payload:upTask
    }
}
export const delTask =(id)=>{
    return {
        type:"Supprimer", 
        payload:id
    }
}
