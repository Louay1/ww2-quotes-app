
const url = "https://favqs.com/api/quotes"


// create an account and generate a Key
const apiKey = "YOUR_API_KEY"
const heads={
    'Content-Type' : 'application/json',
    'Authorization': `Token token=${apiKey}`
}

const query = {
    url: url,
    headers: heads
}

//const qBody = document.getElementById('quote').value
//const qAuth = document.getElementById('author').value
const addBtn = document.getElementById('addBtn')

const quoteContainer = document.querySelector('.quotes-layout')

function displayData(data){
    quoteContainer.innerHTML = data.map(quote => `
        <blockquote class="quote">
            <p>
                ${quote.body}
            </p> &mdash; <span class="author">${quote.author}</span>
        </blockquote>
    `).join('')
}

let fetchQuotes = (url, method, headers) => {
    const req = new Request(url,{
        method: method,
        headers: headers
    })
    fetch(req)
    .then((res => res.json()))
    .then((data)=>{
        quotes = data.quotes
        displayData(quotes)
    })
}

let addQuotes = (query, method='POST') =>{

    const newQuote = {
        "quote":{
            "author": qAuth,
            "body": qBody
        }
    }
    const req = new Request(query.url,{
        method: method,
        headers: query.headers,
        body: newQuote
    })
    fetch(req)
    .then((res) => {
        res.json()
        console.log(res);
    })
    .then((data)=>{
        console.log(data);
    })
}

//addBtn.onclick = addQuotes(query)

fetchQuotes(url, 'GET', heads)
