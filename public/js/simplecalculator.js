

/*
================================================================================
                      GLOBAL VARIABLES
================================================================================
*/
let firstNum = {
  //global object for monitoring changes, data
  allowOp : false,
  opChar : '',
  num1 : undefined
}

/*
================================================================================
                      INITIAL EVENT LISTENERS => VERY MUTABLE
                      GLOBAL ARRAYS attached with listeners
================================================================================
*/
let numKeys = document.querySelectorAll('.grid-con .nums')
numKeys.forEach(key => key.addEventListener('click', addNum))


let opKeys = document.querySelectorAll('.ops button')
opKeys.forEach(key => key.addEventListener('click', opBtn))

document.querySelector('#clear-everything').addEventListener('click', clearAll)
document.querySelector('#calculate').addEventListener('click', simpleCalc)

/*
================================================================================
                      CALCULATOR FUNCTIONS
================================================================================
*/

function addNum()
{
  if(firstNum.num1 === undefined) firstNum.allowOp = true
  let current = document.querySelector('#calcInput').value
  current += this.name
  document.querySelector('#calcInput').value = current
}

function disableOP()
{
  opKeys.forEach(key => key.setAttribute('disabled', 'true'))
}

function resetOP()
{
  opKeys.forEach(key => key.removeAttribute('disabled'))
}

function opBtn()
{
  if(!firstNum.allowOp) return
  else firstNum.allowOp = false
  disableOP()

  let shortIn = document.querySelector('#calcInput')
  firstNum.num1 = Number(shortIn.value)
  firstNum.opChar = this.innerText
  shortIn.value += this.innerText
}

function simpleCalc()
{
  let num1 = firstNum.num1
  let inString = document.querySelector('#calcInput').value

  if(num1 === undefined) return

  //num1 string length + 1 for op char
  let dropChars = inString.indexOf(firstNum.opChar)
  inString = inString.slice(dropChars+1)
  num2 = Number(inString)

  switch(firstNum.opChar)
  {
    case'+':
    calcOutput(num1+num2)
    break
    case'-':
    calcOutput(num1-num2)
    break
    case'/':
    calcOutput(num1/num2)
    break
    case'*':
    calcOutput(num1*num2)
    break
    default:
    calcOutput("Err0r")
    break
  }
}

function calcOutput(output)
{
  document.querySelector('#solved').value = output
}

function clearAll()
{
  //resets global variables to starting states
  firstNum.allowOp = false
  firstNum.opChar = ''
  firstNum.num1 = undefined
  resetOP()
  //clears input and output text fields
  calcOutput("")
  document.querySelector('#calcInput').value = ""
}

/*
================================================================================
                      DYNAMIC PARTICLE BACKGROUND
================================================================================
*/
//library created by https://marcbruederlin.github.io/particles.js/
window.onload = function() {
	Particles.init({
    //operation
		selector: '.background',
    color: '#9eff76',
    connectParticles: true,
    sizeVariations: 1,
    maxParticles : 80,

    //responsive
    responsive: [
    {
      breakpoint: 900,
      options: {
        maxParticles: 30,
      }
    }, {
      breakpoint: 600,
      options: {
        maxParticles: 20,
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0 // disables particles.js
      }
    }
  ]
	});
};
