const currentDate = new Date().toISOString().slice(0, 10);
const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

// const q = searchQuery;
const apiKey = "9acf6131d4a84d1db347a5ffeac75266";
const from = sevenDaysAgo;
const to = currentDate;
const pageSize = 100;

export { newsApiBaseUrl, apiKey, from, to, pageSize };
