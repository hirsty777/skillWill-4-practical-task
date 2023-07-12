//taks 1 
function replace(string, valueToReplace, valueToReplaceWith){
    return string.split(valueToReplace).join(valueToReplaceWith)
}

//task 2 
function toUpperCase(string){
    //conver fist letter of word to uppercase
    return string.split(" ").map((el)=>el[0]=el[0].toUpperCase()+el.slice(1)).join(" ")

    //conver all to uppercse
    //return string.toUpperCase()
}   


//task 3 
function sortByAge(obj){
    return obj.sort((a,b)=>a.age-b.age)
}


console.log(replace("web development is boring", "boring", "interesting"));
console.log(toUpperCase("Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem voluptate assumenda deleniti? Modi, expedita dignissimos! Quas consequuntur dolore hic, assumenda pariatur accusamus, perspiciatis obcaecati quis voluptate quo ea delectus."));
console.log(sortByAge([{name:"lasha",age:33},{name:"guga",age:54},{name:'oto',age:22}]));