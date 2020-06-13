
const url = "https://favqs.com/api/quotes"
const apiKey = "c4544a4bedfab31b61fcde2e2d132013"
const heads={
    'Content-Type' : 'application/json',
    'Authorization': `Token token=${apiKey}`
}
/*
async function fetchQuotes(method, headers){
    req = new Request(url,{
        method: method,
        headers: headers
    })
    const res = await fetch(req)
    const data = res.json()
    console.log(data);
}
fetchQuotes('GET', heads)
*/


/*
let fetchQuotesByID = (url, method,headers, id) => {
    const req
}
*/

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
    // Headers of the request ( Required )
    req = new Request(url,{
        method: method,
        headers: headers
    })
    fetch(req)
    .then((resp => resp.json()))
    .then((data)=>{
        quotes = data.quotes
        displayData(quotes)
    })
}


fetchQuotes(url, 'GET', heads)
