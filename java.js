// linking Divs and setting genres and questions

const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
// categories who what where why and how or more specific if I decide to do a certain theme
const jeopardyCategories = [
    
        // setting questions format 3 questions per category, easy medium hard
    {   
        genre: "",
        questions: [
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },

        ],

    },
    {   
        genre: "",
        questions: [
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },

        ],

    },
    {   
        genre: "",
        questions: [
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },

        ],

    },
    {   
        genre: "",
        questions: [
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },

        ],

    },
    {   
        genre: "",
        questions: [
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
            },
            {
                Question:"",
                answers: ["",""],
                correct:"",
                level:"",
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
}

jeopardyCategories.forEach(category => addCategory(category))