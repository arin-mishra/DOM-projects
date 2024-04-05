var istatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");

var check = 0;

addFriend.addEventListener("click",()=>{
    if (check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        check = 1
        console.log("Bahut maza aaya")
        addFriend.innerHTML = "Remove Friend"
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        check = 0
        console.log("Chutiya banaya")
        addFriend.innerHTML = "Add Friend"
    }
});
