// linking Divs and setting genres and questions

const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
// categories who what where why and how or more specific if I decide to do a certain theme
const jeopardyCategories = [
    
        // setting questions format 3 questions per category, easy medium hard
    {   
        genre: 'WHO',
        questions: [
            {
                question:'Who is the co-founder of Microsoft Corporation and one of the richest individuals in the world?',
                answers: ['Steve Jobs","Bill Gates","Jeff Bezos","Elon Musk'],
                correct:'Bill Gates',
                level:'easy',
            },
            {
                question:'Who wrote the book Game of Thrones ',
                answers: ['J.R Tolkin','George RR Martin'],
                correct:'George RR Martin',
                level:'medium',
            },
            {
                question:'Who is the ',
                answers: ['',''],
                correct:'',
                level:'hard',
            },

        ],

    },
    {   
        genre: 'WHAT',
        questions: [
            {
                question:'Who is the co-founder of Microsoft Corporation and one of the richest individuals in the world?',
                answers: ['Steve Jobs","Bill Gates","Jeff Bezos","Elon Musk'],
                correct:'Bill Gates',
                level:'easy',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'medium',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'hard',
            },

        ],

    },
    {   
        genre: 'WHERE',
        questions: [
            {
                question:'Who is the co-founder of Microsoft Corporation and one of the richest individuals in the world?',
                answers: ['Steve Jobs","Bill Gates","Jeff Bezos","Elon Musk'],
                correct:'Bill Gates',
                level:'easy',
            },
            {
                question:'Who wrote the book Game of Thrones ',
                answers: ['J.R Tolkin','George RR Martin'],
                correct:'George RR Martin',
                level:'medium',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'hard',
            },
        ],

    },
    {   
        genre: 'WHY',
        questions: [
            {
                question:'Who is the co-founder of Microsoft Corporation and one of the richest individuals in the world?',
                answers: ['Steve Jobs","Bill Gates","Jeff Bezos","Elon Musk'],
                correct:'Bill Gates',
                level:'easy',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'medium',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'hard',
            },

        ],

    },
    {   
        genre: 'WHEN',
        questions: [
            {
                question:'Who is the co-founder of Microsoft Corporation and one of the richest individuals in the world?',
                answers: ['Steve Jobs","Bill Gates","Jeff Bezos","Elon Musk'],
                correct:'Bill Gates',
                level:'easy',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'medium',
            },
            {
                question:'',
                answers: ['',''],
                correct:'',
                level:'hard',
            },
        ],

    },

]
// make function
function addCategory() {
    const column = document.createElement('div')
    column.classList.add('genre-column')
   
    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)
// create card class
    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === 'easy'){
            card.innerHTML = 100
        }
        if (question.level === 'medium'){
            card.innerHTML = 200
        }
        if (question.level === 'herd'){
            card.innerHTML = 300
        }
    })

}

jeopardyCategories.forEach(category => addCategory(category))

/* <script>
document.getElementById("game").innerHTML = "Hello JavaScript!";
</script> */
