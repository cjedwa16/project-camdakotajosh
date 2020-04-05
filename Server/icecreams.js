const Section = require('../DB/IceCream_Schema');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'Name'; // Default to sort by course

  Section.find().sort(order)
    .then(sections => response.render('icecreams/index', {icecreams: icecreams, order: order}))
    .catch(error => next(error));
};
