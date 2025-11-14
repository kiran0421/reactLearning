const userList = [];
const tokensList = [];

const createUser = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username and password",
      });
    }

    const newUser = {
      id: userList.length > 0 ? userList[userList.length - 1].id + 1 : 1,
      username,
      password,
      createdAt: new Date().toISOString(),
    };

    userList.push(newUser);
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const verifyUser = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username and password",
      });
    }

    const user = userList.find((u) => u.username === username);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (user) {
      if (user.password !== password) {
        return res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }
      const number = "jwt";
      for (let i = 0; i < 5; i++) number += (Math.random() * 1000).stringify();
      tokensList.push({ username: user, token: number });
      res.status(200).json({
        success: true,
        data: user,
        token: number,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    const { username } = req.headers.username;
    tokensList = tokensList.filter((u) => u.username !== username);
    res.status(200).json({
      success: true,
      data: "successfully logged out",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.headers.username;
    userList = userList.filter((u) => u.username !== id);
    tokensList = tokensList.filter((u) => u.username !== id);
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

export { createUser, verifyUser, logout, deleteUser, tokensList, userList };
