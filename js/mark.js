let msg1 = '<h3 class=\"bg-success text-center p-3\">Great Job!</h3>'
let msg2 = '<h3 class=\"bg-danger p-3 text-center\">Try Again</h3>'

                //page 1 trivi
const testQuestion = ()=>{
  let answer = document.querySelector('#answer').value

if(answer == "Holy Spirit"){
   document.querySelector('#ans').innerHTML= msg1
}
 else{
   document.querySelector('#ans').innerHTML = msg2
 }


}
const testQuestionB = ()=>{
  let answer = document.querySelector('#answerB').value

 if (answer == '40'){
   document.querySelector('#ansB').innerHTML= msg1
 }
 else{
   document.querySelector('#ansB').innerHTML = msg2
 }
  }
