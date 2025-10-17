const { scrapeCategory } = require("../services/categories");

const getCategoryNews = async (req, res) => {
  // read from URL param, not query
  const category = req.params.category ? req.params.category.toLowerCase() : "news";

  try {
    const data = await scrapeCategory(category);
    res.status(200).json({
      success: true,
      count: data.length,
      articles: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getCategoryNews };
