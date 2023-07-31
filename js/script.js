var button = document.querySelector(".show-cat");
//console.log(button);

var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  if(cat.classList.contains("show")){
  cat.classList.remove("show");
  button.innerText = "Wait comeback!";
  button.classList.add("disappear");
    //console.log("Yes")
  } else {cat.classList.add("show");
  button.innerText = "Shoo, cat!!";
  button.classList.remove("disappear");
    //console.log("No");
  }
});




//console.log("It's working!");
//cat.classList.add("show");