const PreOrder = require("../models/preOrder.model");
const Item = require("../models/item.model");
const User = require("../models/user.model");

//add new preorder
const addPreOrder = async (req, res) => {
  try {
    const { itemId, userId } = req.body;

    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const newPreOrder = new PreOrder({
      item: itemId,
      user: userId,
    });

    await newPreOrder.save();

    return res
      .status(201)
      .json({ message: "Pre-order added successfully", preOrder: newPreOrder });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//get specific preorder
const getPreorders = async (req, res) => {
  try {
    const userId = req.params.userId;

    const preOrders = await PreOrder.find({ user: userId }).populate("item");

    return res.status(200).json(preOrders);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//get all pre orders
const getAllPreorders = async (req, res) => {
  try {
    const preOrders = await PreOrder.find();
    return res.status(200).json(preOrders);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//delete preorders
const deletePreorders = async (req, res) => {
  try {
    const preOrder = await PreOrder.findById(req.params.id);
    if (!preOrder) {
      return res.status(404).json({ message: "Pre-order not found" });
    }
    await preOrder.remove();
    return res.status(200).json({ message: "Pre-order deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addPreOrder,
  getPreorders,
  deletePreorders,
  getAllPreorders,
};
