 const navDropDown= (classToModify) => {
    const getClassToModify = document.querySelectorAll(classToModify);
    if (getClassToModify.style.display === "none"); {
        getClassToModify.style.display = "block";
    } 
        getClassToModify.style.display = "none";
    
}