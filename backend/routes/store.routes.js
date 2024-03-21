const express = require("express");
const StoreRouter = express.Router();

const {
    create,
    getAllStores,
    getOneStore,
    deleteStore,
    updateStore
} = require("../controllers/store.controller");

StoreRouter.post('/create',create);
StoreRouter.get('/getAllStores',getAllStores);
StoreRouter.get('/getOneStore/:id',getOneStore);
StoreRouter.delete('/deleteStore/:id',deleteStore);
StoreRouter.patch('/updateStore/:id',updateStore);

module.exports = StoreRouter;