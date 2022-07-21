// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);


// let email=document.getElementById('studentem').value;
// let pas=document.getElementById('studentpass').value;
    
// let data = []
// let url='https://test-936ee-default-rtdb.firebaseio.com/user.json'
// fetch(url).then(value=>value.json()).then((value)=>{
//     data.push(value)
//     for (const key of Object.keys(data)) {
//         console.log(data[key]);
//     }
// }).catch((error) => {
//     console.error(error)
// });
//     if{((document.getElementById('studentem')&& document.getElementById('studentpass')===value))
//         console.log(value);
//     }   else{
//         console.log("error");
//     })

// }
    
   
    // let loginem=document.getElementById('studentem')
    //  let loginpass=document.getElementById('studentpass')
    //  console.log(loginem.stringify)

//     let loginem=document.getElementById('studentem')
//     let loginpass=document.getElementById('studentpass')
//    let dbValue=getString("loginem")
//    let in=request.getParameter("loginem")
//    if(dbValue!=null&&inputValue!=null){
//     if(dbValue.equalsIgnoreCase(inputValue)){
//         console.log("ok")
//     }
//    }

    
        
        
    //    if(result.includes(loginem)){
    //     console.log(result)
    //    }else{
    //     console.log("not found")
    //    }
 
// const db = firebase.firestore()
// console.log(db);

// async function getTokens(subscribers) {
//     const getUser = subscriber => firestore.collection('users').doc(subscriber).get();
//     const promises = subscribers.map(getUser);
//     const users = await Promise.all(promises);
//     return users.map(user => user.data().tokens).flat()
//     }
document.querySelector('#formData')

// fetch(url,{
//     method: 'POST',
//     header:'application/json' ,
//     body: JSON.stringify({email,password})
// }).then(response => response.json).then(response => data()).catch



fetch(url).then(response => response.json).then(response => data()).catch(error);

if (email==response.data[0]){
    window.location.href=''
}else{
    alert("")
}
const { text } = require("stream/consumers");

function validation (){
    var form =document.getElementById('formData')
    var email=document.getElementById('studentem')
    var pass=document.getElementById('studentpass')
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        form.classList.add("valid");
        text.innerHtml="please enter valid email"
        

    }else{
        form.classList.remove("valid")
        

        
    }

}
