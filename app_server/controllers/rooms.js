/* GET Room View */
const rooms = (req, res) => {
    res.render("rooms", { title: 'Travlr Getaways', rooms });
  };
  
  module.exports = {
    rooms,
  };