const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
let score = 0
// create genres, level of difficulty
// create tables with javascript link to scores
 
 
const genres = [
    {
    name: 'Books',
    id: 10
    },
    {
    name: 'Film',
    id: 11
    },
    {
    name: 'Music',
    id: 12
    },
    {
    name: 'Video Games',
    id: 15
    }
]
const levels = ['easy', 'medium', 'hard']

function addGenre(genre) {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = genre.name
    game.append(column)

    levels.forEach(level => {
        const card = document.createElement('div')
        card.classList.add('table')
        column.append(card)

        if (level === 'easy') {
            card.innerHTML = 100
        }
        if (level === 'medium') {
            card.innerHTML = 200
        }
        if (level === 'hard') {
            card.innerHTML = 300
        }
        // if (level === 'harder') {
        //     card.innerHTML = 400
        // }
// fetch premade Api
        fetch(`https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level}&type=boolean`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                card.setAttribute('data-question', data.results[0].question)
                card.setAttribute('data-answer', data.results[0].correct_answer)
                card.setAttribute('data-value', card.getInnerHTML())
            })
            .then(done => card.addEventListener('click', flipCard))

    })
}
genres.forEach(genre => addGenre(genre))
// create flipcard Effect,results
function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    const textDisplay = document.createElement('div')
    const trueButton = document.createElement('button')
    const falseButton = document.createElement('button')
    trueButton.innerHTML = 'True'
    falseButton.innerHTML = 'False'
    trueButton.classList.add('true')
    falseButton.classList.add('false')
    trueButton.addEventListener('click', getResult)
    falseButton.addEventListener('click', getResult)
    textDisplay.innerHTML = this.getAttribute('data-question')
    this.append(textDisplay, trueButton, falseButton)

    const allCards = Array.from(document.querySelectorAll('.table'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}
function getResult() {
    const allCards = Array.from(document.querySelectorAll('.table'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement
    if (cardOfButton.getAttribute('data-answer') === this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else {
        cardOfButton.classList.add('wrong')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click',flipCard)
}
const audio = document.getElementById('backgroundAudio');

  
  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  function setVolume(volume) {
    audio.volume = volume; 
  }

  playAudio();
  function initializeGame() {
   
  }
  
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', function() {
    location.reload();
  });
  var backgroundAudio = document.getElementById('backgroundAudio');

  // Function to toggle mute/unmute of the audio
  function toggleMute() {
    // Toggle the muted property of the audio element
    backgroundAudio.muted = !backgroundAudio.muted;

    
    var muteButton = document.querySelector('.mute');
    muteButton.textContent = backgroundAudio.muted ? 'Unmute' : 'Mute';
  }
  
