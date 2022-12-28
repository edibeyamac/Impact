
const express = require('express');
const {index, allBookView, fantasyView, horrorView, adventureView, romanceView, scienceView } = require('../controllers/book_controller');
const router = express.Router();
router.get('/', index);
router.get('/allbook', allBookView );
router.get('/fantasy', fantasyView );
router.get('/horror', horrorView );
router.get('/adventure', adventureView );
router.get('/romance', romanceView );
router.get('/romance', scienceView );
module.exports = router;


