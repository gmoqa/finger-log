const all = async (req, res) => {
    const customers = [];
    res.status(200).json(customers);
};

module.exports = {
    all
};
