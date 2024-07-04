const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const ITEMS_PER_PAGE = 10;
const open = require('open');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Start the server - set PORT in your environment to change the default port

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    open(`http://localhost:${port}`);
});

// Route for the cryptocurrency details page
app.get('/cryptocurrency/:id', async (req, res) => {
    const coinId = req.params.id;
    try {
        const response = await axios.get(`${process.env.COINGECKO_API_URL}/coins/${coinId}`);
        const coin = response.data;
        res.render('pages/cryptocurrency', { coin });
    } catch (error) {
        console.error('Error fetching data from CoinGecko API:', error);
        res.render('pages/cryptocurrency', { coin: null });
    }
});

// Route for the home page with pagination
app.get('/', async (req, res) => {
    const currentPage = parseInt(req.query.page) || 1;
    try {

        // Get coingecko datas
        var response = await axios.get(`${process.env.COINGECKO_API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: ITEMS_PER_PAGE,
                page: currentPage,
                sparkline: false
            }
        });

        const coins = response.data;

        // Get jquery last version
        response = await axios.get(`${process.env.JQUERY_API_URL}/last`);
        var settings = response.data;
        // Render home page
        res.render('pages/home', {
            currentPage, 
            settings, 
            ITEMS_PER_PAGE,  
            coins 
        }
        );
    } catch (error) {
        console.error('Error fetching data from CoinGecko API:', error);
        res.render('pages/home', { coins: [], currentPage: page });
    }
});


