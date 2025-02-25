import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
    // List of dynamic blog posts
    const posts = [
        {
            title: "🚀 AI in 2025: Future Trends",
            description: "Explore the latest AI advancements coming in 2025.",
           
        },
        {
            title: "🌎 Climate Change: The Role of AI",
            description: "How AI is helping combat climate change.",
         
        },
        {
            title: "🎨 AI in Creative Arts",
            description: "How AI is revolutionizing music, art, and design.",
          
        },
        {
            title: "🏥 AI in Healthcare: A Game Changer",
            description: "Discover AI's impact on diagnostics and treatments.",
         
        },
        {
            title: "📊 AI in Business & Finance",
            description: "How AI is transforming the financial world.",

        }
    ];

    // State for the current post
    const [post, setPost] = useState(posts[0]);

    // Function to load a new random post
    const loadNewPost = () => {
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        setPost(randomPost);
    };

    return (
        <div className="p-6 text-center">
            {/* Dynamic Helmet Meta Updates */}
            <Helmet>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
               
            </Helmet>

            {/* Displaying Blog Post */}
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-600">{post.description}</p>
            

            {/* Button to Load a New Random Post */}
            <button
                onClick={loadNewPost}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Load Another Post
            </button>
        </div>
    );
};

export default BlogPost;
