// let title=document.getElementById("title")
// let desc=document.getElementById("desc")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem(titlec, descc)
  
    
    console.log(titlec, descc)
  
  });