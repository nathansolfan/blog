// import useFetch from "./usefetch"

// [
//     {title: "Banana", body: "Yellow tasty", author:"Mario", id:1},
//     {title: "Strawberry", body: "Red magic",author:"Luigi", id:2},
//     {title: "Kiwi", body: "Green awesome", author:"Yoshi", id:3}
// ]

//                 {/* <button onClick={()=> handleDelete(propFruta.id)}>Delete</button> */}

// // 
//                 const handleDelete = (id) => {
//                     const fruitNew = fruit.filter(fruitdelete => fruitdelete.id !== id)
//                     setFruit(fruitNew)    
//                 }

//                 useFetch()
//                 .then(res => {
//                     if(!res.ok){
//                         throw Error('Could not fetch datarino')
//                     }
//                 })
//                 .then(data =>{
//                     console.log(data)
//                     setData(data)
//                 })
//                 .error(err){
//                     if(err.name === "AbortError"){
//                         console.log(err.name)
//                     }else{
//                         i
//                     }

//                 }