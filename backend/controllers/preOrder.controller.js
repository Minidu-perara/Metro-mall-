const PreOrder = require("../models/preOrder.model");

//add new preorder
const addPreOrder = async (req, res) => {
  try {
    const { status, itemId } = req.body;

    const newPreOrder = await PreOrder.create({
      status,
      item: itemId,
    });
    return res.status(201).json({message: "PreOrder created successfully",newPreOrder});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

//get all pre orders
const getAllPreOrders = async (req, res) => {
  try {
    const preOrders = await PreOrder.find().populate("item");
    return res.status(200).json(preOrders);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//get specific pre order
const getPreOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const preOrder = await PreOrder.findById(id).populate("item");

    if (!preOrder) {
      return res.status(404).json({ message: "PreOrder not found" });
    }
    return res.status(200).json(preOrder);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//delete pre orders
const deletePreOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const preOrder = await PreOrder.findById(id);
    if (!preOrder) {
      return res.status(404).json({ message: "PreOrder not found" });
    }
    await PreOrder.findByIdAndDelete(id);
    return res.status(200).json({ message: "PreOrder deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

//get pending pre orders
const getPendingPreOrders=async(req,res)=>{
  try {
    const pendingPreorders = await PreOrder.find({ status: 'pending' }).populate('item');
    return res.status(200).json(pendingPreorders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

//get completed pre orders
const getCompletedPreOrders=async(req,res)=>{
  try {
    const pendingPreorders = await PreOrder.find({ status: 'completed' }).populate('item');
    return res.status(200).json(pendingPreorders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

//update status pending to completed
const updateStatus=async(req,res)=>{
  try {
    const { id } = req.params;
    const preOrder = await PreOrder.findById(id);

    if (!preOrder) {
      return res.status(404).json({ message: 'PreOrder not found' });
    }

    preOrder.status = 'completed';
    await preOrder.save();
    
    return res.status(200).json({ message: 'PreOrder status updated to completed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  addPreOrder,
  getAllPreOrders,
  getPreOrder,
  deletePreOrder,
  getPendingPreOrders,
  getCompletedPreOrders,
  updateStatus
};
