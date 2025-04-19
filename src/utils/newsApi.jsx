const currentDate = new Date().toISOString().slice(0, 10);
const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const newsApiBaseUrl = "https://nomoreparties.co/news";

const apiKey = "9acf6131d4a84d1db347a5ffeac75266";
const from = sevenDaysAgo;
const to = currentDate;
const pageSize = 100;

export { newsApiBaseUrl, apiKey, from, to, pageSize };
