import { ApplicationError } from "../../error-handler/applicationError.js";
import { getDB } from "../../config/mongodb.js";
import OrderRepository from './order.repository.js'

export default class OrderController{
    constructor(){
        this.orderRepository=new OrderRepository();
    }
    async placeOrder(req,res,next){
        try{
            const userId=req.userID;
            await this.orderRepository.placeOrder(userId);
            res.status(201).send('Order is created');
        }
        catch (err) {
            console.error('Error:', err); 
            next(err);
            throw new ApplicationError(err.message || 'Database error', 500);
        } 
    }
}

