 const getText = document.getElementById('getText')
 const getUser = document.getElementById("getUsers")
 const getPost = document.getElementById("getPosts")

 const getTexts = ()=>{
     fetch('sample.txt')
     .then(function(res){
        return res.text()
     })
     .then(function(data){
         let output = document.getElementById("output")
         output.innerHTML = data
     })
     .catch(error=>console.log(error))
 }

 const getUsers =()=>{
     fetch('users.json')
     .then(function(res){
         return res.json()
     })
     .then(function(data){
         let output =document.getElementById("output")
         output.innerHTML = '<h2>Users</h2>'
         data.forEach(a=>{
            output.innerHTML += `
            <ul>
            <li>ID:${a.id}</li>
            <li>NAME:${a.name}</li>
            <li>EMAIL:${a.email}</li>
            </ul>`
         })
     })
     .catch(error=>console.log(error))

 }

 const getPosts =()=>{
     let url = "http://jsonplaceholder.typicode.com/posts"
     fetch(url)
     .then(res=>res.json())
     .then(data=>{
        let output =document.getElementById("output")
        output.innerHTML = '<h2>Posts</h2>'

        // for(let i=0;i<data.length;i++){
        //     output.innerHTML += `
        //     <div>
        //      <h3>${data[random].title}</h3>
        //      <p>${data[random].body}</p>
        //     </div>
        //     `
        // }
        let random = Math.floor(Math.random()*data.length)
            output.innerHTML += `
            <div>
             <h3>${data[random].title}</h3>
             <p>${data[random].body}</p>
            </div>
            `
     })

 }




 getText.addEventListener('click',getTexts)
 getUser.addEventListener('click',getUsers)
 getPost.addEventListener('click',getPosts)