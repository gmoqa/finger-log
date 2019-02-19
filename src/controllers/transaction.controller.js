const all = async (req, res) => {
    const transactions = [];
    res.status(200).json(transactions);
};

module.exports = {
    all
};
