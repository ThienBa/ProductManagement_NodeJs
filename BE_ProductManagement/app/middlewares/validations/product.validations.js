const checkEmpty = (req, res, next) => {
    const { name, amount, price } = req.body;
    if (name && amount && price) {
        next();
    } else {
        res.status(404).send("Name, amount, price required!");
    }
}

module.exports = {
    checkEmpty,
}