let posts = [
  {
    title: "Post 1 ",
    body: "This is post 1 ",
    createdAt: new Date().getTime() / 1000,
  },
  {
    title: "Post 2 ",
    body: "This is post 2 ",
    createdAt: new Date().getTime() / 1000,
  },
];

let promise1;
function createPost(post) {
  updateLastUserActivityTime();
  promise1 =  new Promise(function (resolve, reject) {
    setTimeout(() => {
      const err = false;
      if (!err) {
        resolve(posts.push(post));
      } else {
        reject("Error Found");
      }
    }, 1000);
  });
  return promise1 ; 
}

//let myinterval;
function getPost() {
  // myinterval = setInterval(() => {
  let output = "";
  console.log(posts);
  if(posts.length===0){document.body.innerHTML = null}
  posts.forEach((post) => {
    let seconds = new Date().getTime() / 1000 - post.createdAt;
    output += `<li>${post.title} created ${seconds} seconds ago</li>`;
    document.body.innerHTML = output;
    
   
    //if (posts.length===0) {
    // clearInterval(myinterval);
    //}
  });

  //console.log(myinterval);
  //}, 1000);
}

function create4thPost(post) {
  return createPost(post);
}

let promise2
function deletePost() {
   promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length !== 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty");
      }
    }, 1000);
  });
  
  return promise2 ; 
}

let promise3
function updateLastUserActivityTime(){
  let user = "Vimal" ;
  let LastActivity = new Date() ;
   promise3 = new Promise((resolve,reject)=>{
     resolve(console.log(`${user} last activated at ${LastActivity}` , posts))
  })
  return promise3 ; 
}

createPost({
  title: "Post 3 ",
  body: "This is post 3 ",
  createdAt: new Date().getTime() / 1000,
}).then(() => {
  create4thPost({
    title: "Post 4 ",
    body: "This is post 4 ",
    createdAt: new Date().getTime() / 1000,
  })})
//   .then(() => {
//     getPost();
//     //console.log(posts)
//     deletePost().then(() => {
//       getPost();
//       // console.log(posts)
//       deletePost().then(() => {
//         getPost();
//         // console.log(posts)
//         deletePost().then(() => {
//           getPost();
//           // console.log(posts)
//           deletePost().then(() => {
//             getPost();
//             // console.log(posts)
//             deletePost()
//               .then(() => {
//                 getPost();
//               })
//               .catch((err) => {
//                 console.log( err);
//               });
//           });
//         });
//       });
//     });
//   });
// });
Promise.all([promise1 , promise2 , promise3]).then(()=>{
  deletePost().then((values)=>{
    console.log(values) ; 
    deletePost().then((values)=>{
      console.log(values);
      deletePost().then((values)=>{
        console.log(values);
        deletePost().then((values)=>{
          console.log(values)
          deletePost()
          .catch((err)=>{console.log(err)})
        })
      })
    })
   
  })
})