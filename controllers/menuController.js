const menuList = [
    {
        id: 1,
        name: 'Carpaccio fresco',
        description: 'Cadaver cru super gostoso',
        price: 78.50,
        
    },
    {
        id: 2,
        name: 'Risotto de Berinjela',
        description: 'Risotto de Berinjela e queijo de cabra',
        price: 66.80,
    },
    {
        id: 3,
        name: 'Aspargos Brancos',
        description: 'Aspargos brancos com vinagrete de legumes presunto vegano',
        price: 178.80,
    },
    {
        id: 4,
        name: 'Mousse de arroz',
        description: 'Mousse de arroz com leite e aromatizante de flor de laranjeira',
        price: 90.60,
    },
    {
        id: 5,
        name: 'Lasanha ao molho bolonhesa',
        description: 'Lasanha bolonhesa com carne vegana e queijo de castanha',
        price: 399.99,
    },
]

const menuController = {
    getHomepage: (req, res) => {
        res.render('index', {menu: menuList});
    },
    getDetails: (req, res) => {
        const {id} = req.params;

        res.render('detalheMenu');
    }
}

module.exports = menuController