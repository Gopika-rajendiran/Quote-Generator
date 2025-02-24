const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const listenBtn = document.getElementById("listen-btn");
const shareBtn = document.getElementById("share-btn");
const shareMenu = document.getElementById("share-menu");
const shareTwitterBtn = document.getElementById("share-twitter-btn");
const shareWhatsappBtn = document.getElementById("share-whatsapp-btn");
const shareInstagramBtn = document.getElementById("share-instagram-btn");
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = `- ${randomQuote.author}`;
}
function listenToQuote() {
  const quote = quoteElement.textContent;
  const author = authorElement.textContent;
  const textToSpeak = `${quote} by ${author}`;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  speechSynthesis.speak(utterance);
}
function shareOnTwitter() {
  const quote = quoteElement.textContent;
  const author = authorElement.textContent;
  const tweetText = `${quote} ${author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
}

function shareOnWhatsapp() {
  const quote = quoteElement.textContent;
  const author = authorElement.textContent;
  const whatsappText = `${quote} ${author}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
  window.open(whatsappUrl, "_blank");
}

function shareOnInstagram() {
  const quote = quoteElement.textContent;
  const author = authorElement.textContent;
  const instagramText = `${quote} ${author}`;

  navigator.clipboard.writeText(instagramText)
    .then(() => {
      alert("Quote copied to clipboard! Paste it on Instagram to share.");
    })
    .catch(() => {
      alert("Failed to copy the quote. Please manually copy and share it on Instagram.");
    });
}

shareBtn.addEventListener("click", () => {
  shareMenu.style.display = shareMenu.style.display === "block" ? "none" : "block";
});

shareTwitterBtn.addEventListener("click", shareOnTwitter);
shareWhatsappBtn.addEventListener("click", shareOnWhatsapp);
shareInstagramBtn.addEventListener("click", shareOnInstagram);

generateBtn.addEventListener("click", generateQuote);
listenBtn.addEventListener("click", listenToQuote);

generateQuote();