<<<<<<< HEAD

// Function that will take in an element id and a class (premade in CSS to toggle to a display of block and )
const navDropDown= (elementIdToToggle, newClass) => {
    // const getClassToModify = document.getElementsByClassName(classToModify);
     document.getElementById(elementIdToToggle).classList.toggle(newClass);
     
     
 }
=======
 const navDropDown= (classToModify) => {
    const getClassToModify = document.querySelectorAll(classToModify);
    if (getClassToModify.style.display === "none"); {
        getClassToModify.style.display = "block";
    } 
        getClassToModify.style.display = "none";
    
}

export {navDropDown}
>>>>>>> e1c1147b4ff511ec66d2500eaaef6eaa7d7d1494
