const Parser = require("rss-parser");
const parser = new Parser();

const categories = {
  headlines: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  india: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
  world: "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
  sports: "https://timesofindia.indiatimes.com/rssfeeds/4719148.cms",
  
  entertainment: "https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
  business: "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
  health: "https://timesofindia.indiatimes.com/rssfeeds/3908999.cms",
  environment : "https://timesofindia.indiatimes.com/rssfeeds/2278290.cms"
};


const scrapeCategory = async (category) => {
  const url = categories[category.toLowerCase()];
  console.log("Scraping category:", category, "URL:", url);
  if (!url) throw new Error("Invalid category");

  const feed = await parser.parseURL(url);
  const articles = feed.items.map(item => ({
    title: item.title,
    link: item.link,
    description: item.contentSnippet || "",
    image: item.enclosure ? item.enclosure.url : null
  }));

  return articles;
};

module.exports = { scrapeCategory };
