
/*GET homepage*/
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', index });
};
 module.exports = {
    index,
 };