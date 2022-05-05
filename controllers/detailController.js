





const detailController = {
    getHomepage: (req, res) => {
        res.render('index', {menu: menuList});
    },
    getDetails: (req, res) => {
        const {id} = req.params;

        res.render('detalheMenu');
    }
}

module.exports = detailController