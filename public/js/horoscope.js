
//get user info
//find star sign
//find horoscope from star sign
//place star sign in h2
//place horoscope in para
document.querySelector('.generateHoroscope').addEventListener('click', horoGen)


const starSign = {
  //each array contains relevant month and days that qualify each starsign
  //each object(starSign) contains 2 arrays that qualify 2 different months
  Aries : {
    month1 :['mar', 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['apr', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  },

  Taurus : {
    month1 :['apr', 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    month2 :['may', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },

  Gemini : {
    month1 :['may', 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['jun', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },

  Cancer : {
    month1 :['jun', 21, 22, 23 ,24, 25, 26, 27, 28, 29, 30],
    month2 :['jul', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  },

  Leo : {
    month1 :['jul', 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['aug', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  },

  Virgo : {
  month1 :  ['aug', 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['sep', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  },

  Libra : {
  month1 :  ['sep', 23, 24, 25, 26, 27, 28, 29, 30],
    month2 :['oct', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  },

  Scorpio : {
    month1 :['oct', 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  },

  Sagittarius : {
    month1 :['nov', 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['dec', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  },

  Capricorn : {
    month1 :['dec', 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['jan', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  },

  Aquarius : {
    month1 :['jan', 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    month2 :['feb', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },

  Pisces : {
    month1 :['feb', 23, 24, 25, 26, 27, 28, 29],
    month2 :['mar', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  }
}


function getBday()
{
  const day = Number(document.querySelector('.day').value)
  const month = document.querySelector('.month').value

  return [day, month]
}

function checkStarSigns(date)
{
  return this == date
}

//test day and month of each starSign
//returns false if none found
function findSign(day, month)
{
  let months = Object.keys(starSign)

  for(let m in months)
  {
    let shortM1 = starSign[months[m]].month1
    let shortM2 = starSign[months[m]].month2
    //test each month and day of each potential star sign
    let test1 = shortM1.some(checkStarSigns, month) && shortM1.some(checkStarSigns, day)
    let test2 = shortM2.some(checkStarSigns, month) && shortM2.some(checkStarSigns, day)

    if(test1) return months[m]
    else if(test2) return months[m]
  }

  console.log('Failed to find proper star sign from input')
  return false
}

function getPred(sign)
{
  let pred
  switch(sign)
  {
    case 'Aries':
      pred="You may have an uncanny encounter with an old friend. Ask about their mother, but NOT about their spin class."
      break
    case 'Taurus':
      pred="Your indominable spirit will face challenges you never thought you'd see. Wear lots of blue, avoid tulips."
      break
    case 'Gemini':
      pred="Your building's power might fluctuate but don't let it discourage you from buying a bigger cable package."
      break
    case 'Cancer':
      pred="You're a Cancer, not a Cantcer! Embrace a challenge and put someone else in a pinch for once!"
      break
    case 'Leo':
      pred="Avoid direct sunlight or people will start finding you shady. Try to cleanse your aura in a garden or a park."
      break
    case 'Virgo':
      pred="Sometimes it's okay to Vir-stay. Take a couple days off and embrace your own celestial energies."
      break
    case 'Libra':
      pred="A true Libra can perceive the non-dualistic nature of reality. Try talking about your friends behind their backs, but to their faces."
      break
    case 'Scorpio':
      pred="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -Only true Scorpio's get this"
      break
    case 'Sagittarius':
      pred="Arrows don't shoot straight and neither should you. You won't get hate for embellishing what happened last weekend!"
      break
    case 'Capricorn':
      pred="Capricorn? More like Dabricorn!\nMax out the volume on your car's radio on the way home from work everyother Wednesday. You'll be surprised with the results."
      break
    case 'Aquarius':
      pred="No more tears! Stand up and take charge of your life, no one can stop the ocean!"
      break
    case 'Pisces':
      pred="Do you like fishsticks?\nIf you don't then you should start taking Omega-3 and Omega-6 supplements!"
      break
    default:
      pref= false
      break
  }

  return pred
}

function horoGen()
{
  clearHoroscope()
  let bday = getBday()//returns an array with [day, month]
  let sign = findSign(...bday)//returns string property name rel: starSign
  let prediction = getPred(sign)//string with prediction

  if(typeof prediction === 'string' && typeof sign === 'string')
  {
    document.querySelector('.star-sign').innerText = sign
    document.querySelector('.prediction').innerText = prediction
  }
  else
  {
    document.querySelector('.star-sign').innerText = "Honest Mistake"
    document.querySelector('.prediction').innerText = "Try entering a valid date and\nSpeak to Bianco Again"
  }
}

function clearHoroscope()
{
  document.querySelector('.star-sign').innerText = ""
  document.querySelector('.prediction').innerText = ""
}
