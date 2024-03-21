const Store = require("../models/store.model");

//create store
const create = async (req,res) => {
    try{

        const {storeName, location, category, description} = req.body;

        const newStore = {
            storeName: storeName,
            location: location,
            category: category,
            description: description
        }

        const newstore = new Store(newStore);
        await newstore.save();

        return res.status(200).send({
            status: true,
            message:"store created successfully"
        });

    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        });
    }
};

//getAll stores
const getAllStores = async (req,res) => {
    try{

        const stores = await Store.find();
        return res.status(200).send({
            status: true,
            message:"store received successfully",
            allstores:stores
        });

    }catch(err){
        return res.status(500).send({
            status: false,
            message: err.message
        });
    }
};

//getOneStore
const getOneStore = async (req,res) => {
    try{

        const storeID = req.params.id; 
        const store = await Store.findById(storeID);
        return res.status(200).send({
            status: true,
            message:"store received successfully",
            singleStore: store
        });

    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        });
    }
};

//updateUser
const updateStore = async (req,res)=>{
    try{
        const storeId = req.params.id;
        const{storeName, location, category, description} = req.body;

        const updateStore = {
            storeName:storeName,
            location:location,
            category:category,
            description: description
        };
        
        const updatedStore = await Store.findByIdAndUpdate(storeId,updateStore);

        return res.status(200).send({
            status:true,
            message:"Store updated successfully",
            allstores:updatedStore
        })

    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        });

    };
};

//deleteStore
const deleteStore = async (req,res) => {
    try{

        const storeId = req.params.id;

        const deleteStore = await Store.findByIdAndDelete(storeId);

        return res.status(200).send({
            status:true,
            message:"Store Deleted Successfully",
            deletestore: deleteStore
        });

    }catch(err){
        return res.status(500).send({
            status:false,
            message:err.message
        });
    };
};

module.exports={
    create,
    getAllStores,
    getOneStore,
    deleteStore,
    updateStore,
};