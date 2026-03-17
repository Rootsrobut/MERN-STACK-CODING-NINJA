import CartItemModel from "./cartItems.model.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
import CartItemsReposiory from "./cartitems.repository.js";
export class CartItemsController {
  constructor() {
    this.cartItemsReposiory = new CartItemsReposiory();
  }
  async add(req, res) {
    try {
      const { productID, quantity } = req.body;
      const userID = req.userID;
      await this.cartItemsReposiory.add(productID, userID, quantity);
      res.status(201).send("Cart is updated");
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }

  async get(req, res) {
      try {
      const userID = req.userID;
      const items = await this.cartItemsReposiory.get(userID);
      return res.status(200).send(items);
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }

  async delete(req, res) {
    try {
      const userID=req.userID;
      const cartItemID = req.params.id;
      const isdeleted = await this.cartItemsReposiory.delete(cartItemID, userID);
      if (!isdeleted) {
        return res.status(404).send('Item not found');
      }
      return res.status(200).send("Cart item is removed");
    } catch (err) {
      console.log("Error", err);
      throw new ApplicationError("something is worng with database ", 500);
    }
  }
}
