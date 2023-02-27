let myArray = [1, 2, 3, 4, 5]

console.log(myArray)

let arrayList = document.getElementById("array-item")
let userInput = document.getElementById("user-input")

//document.getElementById("array-item").innerHTML = myArray
arrayList.innerHTML = myArray

function reRender(){
    arrayList.innerHTML = myArray
    userInput.value = ""
}

function pushToArray()  //Add to array list
{
    //let newItem = document.getElementById("user-input").value;
    let newItem = userInput.value

    if(newItem !== '')      //will only run if user input is not null
        myArray.push(newItem)
    
    console.log(myArray)
    
    reRender()  //calling reRender() instead of below code
    //arrayList.innerHTML = myArray
    //userInput.value = ""
}

function popToArray()   //Remove last item from array
{
    myArray.pop();
    reRender()
    console.log(myArray)
}


function shiftArray()   //Remove first element - shifts to left
{
    myArray.shift()
    reRender()
    console.log(myArray)
}

function unShiftArray() //Adds infront of the array
{
    //let newItem = uesrInput.value - can be directly called instead of this
    if(userInput.value !== '')     //will only run if user input is not null
        myArray.unshift(userInput.value)
    reRender()
    console.log(myArray)
}


//Splice myArray.splice(starting index, length) 
//myArray.splice(2, 2, 5) // 2nd index, removes 2 elements, adds 5 in it's place 
//myArray.splice(2, 0, 5) // to add element in 2nd index 

//console.log(myArray.splice(2, 2)) //arr[1,2,3,4,5] -> removes[3,4] -> [1,2,5]
//console.log(myArray.splice(2, 2, 9)) //arr[1,2,3,4,5] -> [1,2,9,5]
//console.log(myArray.splice(2, 0, 8)) //arr[1,2,3,4,5] -> [1,2,3,8,4,5]
//console.log(myArray)


//Slice (2, 3) = Selects from 2nd index < 3rd index but doesn't change arraylist 

//console.log(myArray.slice(1, 3)) //arr[1,2,3,4,5] -> [2,3]
// console.log(myArray.slice(2, 3)) //arr[1,2,3,4,5] -> [3]
// console.log(myArray)
