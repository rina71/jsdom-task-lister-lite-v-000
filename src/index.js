document.addEventListener("DOMContentLoaded", () => {
  prevent();
});

function prevent(){
  let description = document.getElementById("create-task-form");
  description.addEventListener("submit", function(event){
alert("me and all my relatives are owned by China");
    event.preventDefault();
  },false)
}
