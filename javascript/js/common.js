let $ = function (id) {
    let tagId = document.getElementById(id);
    return tagId;
}
//default argument arrow function
let val = (id,content=null) => {
    if(content===null)
        return $(id).value;
    else 
        $(id).value = content;
}