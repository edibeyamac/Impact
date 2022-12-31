
const express = require('express');
const {index, allBookView, fantasyView, horrorView, adventureView, romanceView, scienceView,getBookView,createBookView ,createBookViewPOST,deleteBookView} = require('../controllers/book_controller');
const router = express.Router();
router.get('/', index);
router.get('/allbook', allBookView );
router.get('/getBookView', getBookView );
router.get('/createBookView', createBookView );
router.post('/createBookViewPOST', createBookViewPOST );
router.get('/deleteBookView', deleteBookView );
router.get('/fantasy', fantasyView );
router.get('/horror', horrorView );
router.get('/adventure', adventureView );
router.get('/romance', romanceView );
router.get('/romance', scienceView );
module.exports = router;


