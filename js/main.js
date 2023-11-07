/** Required abilities of a calculator
 * accept user inputs of number, operator, and another number
 * should acccept decimal numbers
 * store inputs
 * recognize input and perform calculations
 * return a result
 *  
 */

const keys = document.querySelector('.cal-buttons')
    keys.addEventListener('click', event => {
        const {target} = event;
       const {value} = target;
        if (!target.matches('button')){
           return
        }else {
            calculator.parseInput(value)
            //console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        switch(value) {
            case '=' :
                //calculate the answer
                break;
            case '.':
                if(this.displayText == 0){
                    addText('0.')
                }else {
                    addText(value)
                }
                break;
                default:
                    this.addText(value)
                    break;
        }
    },
    
    addText(value){
        if  (this.displayText === "0"){
            this.displayText = ''
        }else if (this.prevTotal !== null) {
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (isNaN(+(value)) && isNaN(this.displayText)){
            if(isNaN(this.dispalyText.slice(-1))){
                return
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
    },

    outputText(text) {
        document.querySelector('.cal-screen').value = text
    }

    operations(equation) {
        
    }
}






  //checks for add,sub,div,equal

// case '+' :
//     //addition
//     break;
//     case '-' :
//         //substractin
//         break;
//         case '*' :
//             //multiplication
//             break;
//             case '/' :
//                 //division



























// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
