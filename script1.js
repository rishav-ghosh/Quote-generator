
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
  
  // Remove Loading Spinner
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

  
function quotesGenerator() {
    loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    }
      // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
    quoteText.classList.remove('long-quote');
      }
      // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }
  
  // Event Listeners
  newQuoteBtn.addEventListener('click',quotesGenerator);
  twitterBtn.addEventListener('click', tweetQuote);
  
  // On Load
  getQuotes();