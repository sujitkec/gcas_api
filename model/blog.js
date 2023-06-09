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
            content_img: {
                type: String,
            },
            title: {
                type: String,
            },
            content: {
                type: mongoose.Schema.Types.Mixed,
            },
        }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Blog", blogSchema);
