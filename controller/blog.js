const Blogs = require('../model/blog');

module.exports.getblogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports.getblog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blogs.findById(id);
        if (!blog)
            res.status(200).json("Blog does not exist");
        res.status(200).json(blog);
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message);
    }
}

module.exports.gettop3 = async (req, res) => {
    try {
        const blogs = await Blogs.find({}).sort({ created_at: -1 }).limit(3);
        if (blogs.length === 0)
            res.status(200).json("no Blogs to show");
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports.addblog = async (req, res) => {
    try {
        const existingblog = await Blogs.findOne({ blog_title: req.body.blog_title })
        if (existingblog) {
            return res.status(200).json('Blog already found..')
        }
        const blog = new Blogs({ ...req.body });
        await blog.save();
        res.status(200).json(blog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message);
    }
}

module.exports.updateblog = async (req, res) => {
    try {
        const { id } = req.params;
        await Blogs.findByIdAndUpdate(id, req.body);
        res.status(200).json("Updated Edited");
    } catch (error) {
        res.status(500).json(error.message);
    }
}


module.exports.deleteblog = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await Blogs.findByIdAndRemove(id);
        res.status(200).json("Deleted Successfully");
    } catch (error) {
        res.status(500).json(error.message);
    }
}
