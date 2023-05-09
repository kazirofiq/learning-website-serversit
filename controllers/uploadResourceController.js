const { resoursesCollection } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getUploadResource = async (req, res) => {
    const resource = await readDoc(resoursesCollection)

    res.send(resource)
}

const postUploadResource = async (req, res) => {
    const result = await createDoc(req, resoursesCollection)

    res.send(result)
}
const getSameCategoryResouce = async (req, res) => {
    const id = req.params.id
    
    let query = {}
    if(id !== "11111"){
        if((id === "10002" )|| (id === "10001") )
        {
         query = {licenceId: id}
        }
        else{
            query = {categoryId: id} 
        }
        
    }
    const result = await resoursesCollection().find(query).toArray()

    res.send(result)
       

}
// const getAUserByPremium = async (req, res) =>{
        

//          const licencedId = req.params.id
//          if(licencedId !== "11111"){
//             query = {categoryId: licencedId} 
//             // query = {licencedId: id}
//         }
         
//           const result = await  resoursesCollection().find(query).toArray()
//           res.send(result)
// }




module.exports = {
    getUploadResource,
    postUploadResource,
    getSameCategoryResouce,
}