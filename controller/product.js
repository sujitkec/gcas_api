const Products = require('../model/product');

module.exports.getproducts = async (req, res) => {
    try {
        const prod = await Products.find({});
        res.status(200).json(prod);
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message);
    }
}

module.exports.getproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Products.findById(id);
        if (!blog)
            res.status(200).json("Product does not exist");
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports.addproduct = async (req, res) => {
    try {
        const existingproduct = await Products.findOne({ product_code: req.body.product_code })
        if (existingproduct) {
            return res.status(200).json('Product already found..')
        }
        const product = new Products({ ...req.body });
        await product.save();
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports.updateproduct = async (req, res) => {
    try {
        console.log(req.body);
        await Products.findOneAndUpdate({ product_code: req.body.product_code }, { ...req.body });
        res.status(200).json("Updated Edited");
    } catch (error) {
        console.log(err.message)
        res.status(500).json(error.message);
    }
}

module.exports.deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await Products.findOneAndDelete({ product_code: id });
        res.status(200).json("Deleted Successfully");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports.addAndUpdateTable = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body)
        const existingproduct = await Products.findById(id);
        if (existingproduct) {
            await Products.findOneAndUpdate({ _id: id }, {
                spec_table: req.body
            });
            res.status(200).json("Updated Edited");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}
