window.addEventListener('keydown', switchKey)
window.addEventListener('resize', redoRain)

let rain = {
  isRaining : false,
  m1Rain : null,
  m2Rain : null,
  m1Emotes : [],
  m2Emotes : []
}
getEmotes() //get and store emotes in rain object

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('click', playSound))

const listOfKeys = [...keys].map(key => +key.attributes[0].nodeValue)

function playSound()
{
  let keyCode = this.attributes[0].nodeValue
  const audio  = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)

  if(!audio) return

  audio.currentTime = 0;
  audio.play()
  key.classList.add('playing')
  //if emotes are loaded, deploy
  if(rain.m1Emotes.length&&rain.isRaining==false)
  {
    rain.isRaining = true
    matrixRain()
  }
  else if(rain.m2Emotes.length) {
    moreRain()
  }
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

function switchKey(e)
{
    if(listOfKeys.includes(e.keyCode)) document.querySelector(`.key[data-key="${e.keyCode}"]`).click()
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function redoRain()
{
  //check for intervals, clear and call methods if found
  if(rain.m1Rain) {
    clearInterval(rain.m1Rain)
    matrixRain()
  }

  if(rain.m2Rain) {
    clearInterval(rain.m2Rain)
    moreRain()
  }
}

async function getEmotes()
{
  try{
    const url = 'https://emojihub.herokuapp.com/api/all/category_animals_and_nature'
    let res = await fetch(url)
    let data = await res.json()
    const emotes = []
    data.forEach(emoCode => {
      let baseCode = emoCode.htmlCode[0].replace(/[^\w]/g, '')
      emotes.push(String.fromCodePoint(baseCode))
    })
    rain.m1Emotes = emotes.slice(0)
  }catch(err)
  {
    console.error("Error in fetching m1Emotes: ", err)
  }
  try{
    const groups = ['emotion', 'cat_face', 'animal_amphibian', 'animal_bird', 'animal_bug', 'animal_mammal', 'animal_marine', 'animal_reptile']
    const random = Math.floor(Math.random()*groups.length)
    const url = 'https://emojihub.herokuapp.com/api/all/group_' + groups[random]
    const res = await fetch(url)
    const data = await res.json()
    const emotes = []
    data.forEach(emoCode => {
      let baseCode = emoCode.htmlCode[0].replace(/[^\w]/g, '')
      emotes.push(String.fromCodePoint(baseCode))
    })
    rain.m2Emotes = emotes.slice(0)
  }catch(err)
  {
    console.error('Error in fetching m2Emotes: ', err)
  }
}

function matrixRain()
{
  //base code from https://gist.github.com/Techgokul/e434ea602bda6840d5ebf95c4be5ebeb
  let c = document.getElementById("matrixRain");
  let ctx = c.getContext("2d");

  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  //emotes in array, inconsistent lengths
  let emotes= rain.m1Emotes

  let font_size = 30;
  let columns = Math.ceil(c.width/font_size); //number of columns for the rain
  //an array of drops - one per column
  let drops = new Array(columns).fill("")
  //x below is the x coordinate
  // x => 1 co-ordinate of the drop(same for every drop initially)
  drops = drops.map( x => Math.floor(Math.random()*emotes.length))
  //drawing the characters
  function draw()
  {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.025)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "black"; //color doesn't matter for emotes
    ctx.font = font_size + "px arial";
    //looping over drops
    for(let i = 0; i < drops.length; i++)
    {
      //a random emote to print
      let text = emotes[Math.floor(Math.random()*emotes.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
}

rain.m1Rain = setInterval(draw, 33);
}

function moreRain()
{
  //base code from https://gist.github.com/Techgokul/e434ea602bda6840d5ebf95c4be5ebeb
  let c = document.getElementById("matrixRain2");
  let ctx = c.getContext("2d");
  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  //random array of emotes, inconsistent length
  let emotes = rain.m2Emotes

  let font_size = 50;
  let columns = Math.floor(c.width/font_size/2); //number of columns for the rain
  //an array of drops - one per column
  let drops = new Array(columns).fill("")
  //x below is the x coordinate
  // x => 1 co-ordinate of the drop(same for every drop initially)
  drops = drops.map( x => 1)
  //drawing the characters
  ctx.fillStyle = "rgba(0, 0, 0, 0.0)"; //black background, 0 opacity
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "black"//color doesn't matter for emotes
  ctx.font = font_size + "px arial";
  //looping over drops
  for(let i = 0; i < drops.length; i++)
  {
    //a random character to print
    let text = emotes[Math.floor(Math.random()*emotes.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, 2*i*font_size, Math.floor(Math.random()*c.height)); //drops[i]*font_size
  }

rain.m2Rain = true
}
