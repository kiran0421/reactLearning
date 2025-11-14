let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    createdAt: new Date().toISOString(),
  },
];

// Controller to get all posts
const getAllPosts = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Controller to create a new post
const createPost = (req, res) => {
  try {
    let newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide title and content",
      });
    }

    const newPost = {
      id: newId,
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    posts.push(newPost);

    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
const getPostById = (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post not found with id: ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const editPostById = (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post not found with id: ${id}`,
      });
    }

    posts = posts.map((p) => {
      if (p.id === parseInt(id)) {
        return {
          ...p,
          ...req.body,
        };
      }
      return p;
    });
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
const deletePostById = (req, res) => {
  try {
    const { id } = req.params;
    posts = posts.filter((p) => p.id !== parseInt(id));
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export {
  getAllPosts,
  getPostById,
  createPost,
  editPostById,
  deletePostById,
  posts, // Export the array if you need to access it elsewhere
};
