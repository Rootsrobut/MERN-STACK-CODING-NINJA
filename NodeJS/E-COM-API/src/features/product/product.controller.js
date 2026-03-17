import ProductModel from './product.model.js'
export default class ProductController{
    getAllProducts(req,res){
        const products=ProductModel.GetAll();
        res.status(200).send(products);
    }
    addProduct(req,res){
        const {name,price,sizes}=req.body;
        const newProduct={
            name,
            price:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl:"/uploads/"+req.file.filename, 
        };
        const createdRecord=ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }
    rateProduct(req,res){

    }
    getOneProduct(req,res){
        const id=Number(req.params.id);
        const product = ProductModel.getProductById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        return res.status(200).send(product);
    }
    filterProducts(req,res){
       const minPrice=req.query.minPrice;
       const maxPrice=req.query.maxPrice;
       const category=req.query.category;
       const result=ProductModel.filterProducts(minPrice,maxPrice,category);
       res.status(200).send(result);
    }
}