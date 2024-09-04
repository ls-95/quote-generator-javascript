// Global function to handle the JSONP response
function handleQuoteResponse(data) {
  document.querySelector("blockquote").textContent = data.quoteText;
  document.querySelector("span").textContent = data.quoteAuthor
    ? data.quoteAuthor
    : "Unknown";
}

// Function to fetch a new quote
function fetchNewQuote() {
  // Generate a unique value to prevent caching
  const uniqueValue = new Date().getTime();

  // Create a new script element for JSONP request
  let script = document.createElement("script");
  script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=handleQuoteResponse&cacheBust=${uniqueValue}`;

  // Append the script to the document to trigger the API request
  document.body.appendChild(script);
}

// When the DOM is fully loaded, set up the event listener
document.addEventListener("DOMContentLoaded", function () {
  // Automatically fetch a quote when the page loads
  fetchNewQuote();

  // Set up the button click event listener to fetch a new quote
  document
    .getElementById("new-quote-btn")
    .addEventListener("click", fetchNewQuote);
});
