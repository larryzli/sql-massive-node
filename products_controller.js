module.exports = {
    create(req, res) {
        const db = req.app.get("db");
        const { name, description, price, imageurl } = req.body;
        db
            .create_product([name, description, price, imageurl])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    getOne(req, res) {
        const db = req.app.get("db");
        const { id } = req.params;
        db
            .read_product([id])
            .then(product => {
                return res.status(200).json(product);
            })
            .catch(console.log);
    },
    getAll(req, res) {
        const db = req.app.get("db");
        db
            .read_products()
            .then(products => {
                return res.status(200).json(products);
            })
            .catch(console.log);
    },
    update(req, res) {
        const db = req.app.get("db");
        const { desc } = req.query;
        const { id } = req.params;
        db
            .update_product([id, desc])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    delete(req, res) {
        const db = req.app.get("db");
        const { id } = req.params;
        db
            .delete_product([id])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    }
};
