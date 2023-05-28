const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blog_title: {
        type: String,
        required: true,
    },
    blog_img: {
        type: String,
    },
    summary: {
        type: String,
        required: true,

    },
    main_content: {
        type: String,
        required: true,
    },
    sub_content: [
        {
            title: {
                type: String,
            },
            content: {
                type: String,
            }
        }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Blog", blogSchema);
