    // FSJS - Random Quote Generator

    var tempRandomNumber;

    // Create the array of quote objects and name it quotes
    var quotes = [
        { 
            quote: 'We don\'t want to tell our dreams. We want to show them',
            source: 'Cristiano Ronaldo',
            citation: 'Madrid Newspaper',
            year: 2017
        },
        { 
            quote: 'Sorry haters, I just can\'t stop scoring',
            source: 'Neymar',
            citation: 'France Newspaper',
            year: 2018
        },
        { 
            quote: 'I decide my future, I decide what I want to do. Nobody else',
            source: 'Zlatan Ibrahimovic',
            citation: 'USA Newspaper',
            year: 2018
        },
        { 
            quote: 'You can overcome anything if and only if you love something enough',
            source: 'Lionel Messi',
            citation: 'Barcelona Newspaper',
            year: 2017
        },
        { 
            quote: 'I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet',
            source: 'Zinedine Zidane',
            citation: 'Italia Newspaper',
            year: 2008
        }
    ];

    // Create the getRandomQuuote function and name it getRandomQuote
    function getRandomQuote(array) {
        var random_quotes = Math.floor(Math.random() * quotes.length );
        console.log("Test how many quotes? : " + quotes.length);
        return random_quotes;
    };


    // Create the printQuote funtion and name it printQuote
    function printQuote() {
    
        // Debug to see the value
        console.log("THE RANDOM QUOTE IS x : " + getRandomQuote(quotes));

        var randomNumber = getRandomQuote(quotes);

        var quoteString =  "<p class = 'quote'>" + quotes[randomNumber].quote + "</p>";
        quoteString += "<p class = 'source'>" + quotes[randomNumber].source;
        quoteString += "<span class = 'citation'>" + quotes[randomNumber].citation + "</span>";
        quoteString += "<span class='year'>" + quotes[randomNumber].year + "</span>"+ "</p>";

        document.getElementById('quote-box').innerHTML = quoteString;

    }

    // This event listener will respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "printQuote" function is called
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);