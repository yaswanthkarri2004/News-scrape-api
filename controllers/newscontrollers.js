const { count } = require('console');
const {scrapeNews} = require('../services/newsservices');

const getAllNews = async (req, res) => {
    try {
        const data = await scrapeNews();
        res.status(200).json({
            success : true,
            count : data.length,
            articles : data,    
        });
    }
    catch (error) {
        res.status(500).json({
            success : false,
            message : error.message,
        });
    }
};

module.exports = { getAllNews };