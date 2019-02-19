const all = async (req, res) => {
    const users = [];
    res.status(200).json(users);
};

module.exports = {
    all
};
