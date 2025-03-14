const quotes = [
    "Если вы спорите с дураком, значит дураков уже двое",
    "Лишь одна вещь в этой жизни меня огорчает: я не могу быть кем-то другим",
    "Прогресс - это способность человека усложнять простоту",
    "Каждый будет наслаждаться своими 15 минутами славы один раз",
    "Я отвечаю только за свои слова, а не за то, как вы их понимаете"
];

document.addEventListener("DOMContentLoaded", function () {

    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteBtn = document.getElementById("newQuote");
    const addQuoteBtn = document.getElementById("addQuote");
    const clearQuotesBtn = document.getElementById("clearQuotes");
    const quoteInput = document.getElementById("quoteInput");

    function showRandomQuote () {
        if (quotes.length === 0) {
            quoteDisplay.textContent = "Цитаты удалены!";
            return;
        }

        const randomIndex = Math.floor(Math.random() * quotes.length);

        quoteDisplay.textContent = quotes[randomIndex];
    
    }

    function addQuote() {
        const newQuote = quoteInput.value.trim();
        if (newQuote) {
            quotes.push(newQuote);
            quoteInput.value = "";
        }
    }

    function clearQuotes( ) {
        quotes.length = 0;
        quoteDisplay.textContent = "Цитаты удалены!";
    }

    newQuoteBtn.addEventListener("click", showRandomQuote);
    addQuoteBtn.addEventListener("click", addQuote);
    clearQuotesBtn.addEventListener("click", clearQuotes);

    showRandomQuote();
});