
// Function that will take in an element id and a class (premade in CSS to toggle to a display of block and )
const navDropDown= (elementIdToToggle, newClass) => {
    // const getClassToModify = document.getElementsByClassName(classToModify);
     document.getElementById(elementIdToToggle).classList.toggle(newClass);
     
     
 }
