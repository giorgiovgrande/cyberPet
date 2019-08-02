alert('hello!')

class Pet {
 
    constructor(name){
        this._name = name
        this._hunger = 100
        this._thirst = 100
        this._happiness = 50
        this._poopPercent = 50
        this._boredom = 50
    }

    get name(){
        return this._name
    }

    get hunger(){
        return this._hunger
    }

    get thirst(){
        return this._thirst
}

    eat() {
        this._hunger-=10
        this._happiness+=5
        this._poopPercent+=10
        checkPoop()
    }

    checkPoop(){
        if (this._poopPercent >= 60){
            poop()
            }
    } 

    drink(){
        this._thirst-=10
        this._happiness+=5
    }

    stroke(){
        this._happiness+=20
    }

    poop(){
        this._happiness-=2
    }

    play(){
        this._happiness+=10
        this._boredom-=15
    }
}

class snake extends Pet {
    constructor(name, lovesMice){
        super(name)
        this._lovesMice = lovesMice
    }
    get lovesMice(){
        return this._lovesMice
    }
}
    
const Slither = new snake("Slither", true)

class panther extends Pet {
    constructor(name, lovesMeat){
        super(name)
        this._lovesMeat = lovesMeat
    }
    get lovesMeat(){
        return this._lovesMeat
    }

}
const Cuddles = new panther("Cuddles", true)

class bear extends Pet {
    constructor(name, lovesFish){
        super(name)
        this._lovesFish = lovesFish
    }
    get lovesFish(){
        return this._lovesFish
    }
}

const Baloo = new bear("Baloo", true)

class tiger extends Pet {
    constuctor(name, lovesManCubs){
        // super(name)
        this._lovesManCubs = lovesManCubs
    }
    get lovesManCubs(){
        return this._lovesManCubs
    }
}

const Toni = new tiger("Toni", true)

const snakeFunction = () => {
  
    userInput == prompt(`"Would you like to feed ${name}? \n1. Yes \n2. No"`)

    if (userInput == "Yes"){
        eat()
        console.log(myAnimal._hunger)
    }
    else {
        return (myAnimal._hunger)
    }
    console.log("Snaaaaaaaaake")
}

let userInput;
let myAnimal;

prompt("Welcome! Pick an animal! \n1.Snake \n2. Panther  \n3. Bear")

if (userInput == "1" || 1 || "One" || "1." || "Snake" || "snake" || "1.Snake" || "1.snake"){
    myAnimal = new snake("Slither", false)
    snakeFunction()
}

// else if (userInput == "2" || 2 || "Two" || "2." || "Panther" || "panther" || "2.Panther" || "2.panther"){
//     let myPanther = new panther("Cuddles", false)
//     pantherFunction(myPanther)
// }

// else if (userInput == "3" || 3 || "Three" || "3." || "Bear" || "bear" || "3.Bear" || "3.bear"){
//     let myPanther = new panther("Cuddles", false)
//     pantherFunction(myPanther)
// }




//myAnimal = animalPicker()
