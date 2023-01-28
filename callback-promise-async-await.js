const posts = [
    {title:"Post 1 " , body:"this is post 1" , createdAt: Math.floor(new Date().getTime()/1000)},
    {title:"Post 2 " , body:"this is post 2" , createdAt: Math.floor(new Date().getTime()/1000)}
] ;
let postTime ;
function createPost(post){
    postTime = Math.floor(new Date().getTime()/1000) ;
    setTimeout(()=>{
        posts.push(post);
           
    } , 4000)
   
}
function getPost(){
    setTimeout(()=>{
        let output = '' ; 
        posts.forEach((post)=>{
            let getTime = Math.floor(new Date().getTime()/1000) ; 
            let seconds = getTime - postTime ;
            output += `<li>${post.title} created ${seconds} seconds ago</li>`
        })
         
        document.body.innerHTML = output  ;
    } , 4000)
     
}

function create4thPost(post){
    createPost(post);
}

createPost({title:"Post 3" , body:"this is post 3 " , createdAt: Math.floor(new Date().getTime()/1000)}) ; 
create4thPost({title:"Post 4" , body:"this is post 4 " , createdAt: Math.floor(new Date().getTime()/1000)})
getPost() ; 
console.log(posts)