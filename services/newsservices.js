const axios = require("axios");
const cheerio = require("cheerio");

const scrapeNews = async () => {
  const url = "https://timesofindia.indiatimes.com/home/headlines";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const articles = [];

  // Updated selector for TOI headlines
  $("div.top-newslist li").each((i, el) => {
    const title = $(el).find("a").text().trim();
    const link = $(el).find("a").attr("href");
    const image = $(el).find("img").attr("src") || $(el).find("img").attr("data-src") || null;
    const description = $(el).find("p").text().trim() || null;

    if (title && link) {
      articles.push({
        title,
        link: link.startsWith("http") ? link : `https://timesofindia.indiatimes.com${link}`,
        image,
        description
      });
    }
  });

  return articles;
};

module.exports = { scrapeNews };
