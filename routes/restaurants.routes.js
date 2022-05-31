const router = require('express').Router()

const restaurants = [
  { name: 'Bouillon-Chartier', type_of_food: 'french', category: 'typical and classic french food', range_of_price: '$', location: 'paris' },
  { name: 'PNY', type_of_food: 'american', category: 'burger', range_of_price: '$$', location: 'paris'},
  { name: 'Big-mamma', type_of_food: 'italian', category: 'pizza and pasta', range_of_price: '$', location: 'paris' },
  { name: 'Bistrot-Régent', type_of_food: 'french', category: 'meat and fries', range_of_price: '$', location: 'paris' },
  { name: 'Pierre-Sang-Oberkampf', type_of_food: 'french', category: 'french gastronomy', range_of_price: '$$$', location: 'paris' },
  { name: 'Le-paradis-du-fruit', type_of_food: 'french', category: 'healthy', range_of_price: '$', location: 'paris' },
  { name: 'Le-café-des-anges', type_of_food: 'french', category: 'french food', range_of_price: '$', location: 'paris' },
  { name: 'Le-camion-qui-fume', type_of_food: 'american', category: 'burger', range_of_price: '$$', location: 'paris' },
  { name: 'Alcamie', type_of_food: 'french', category: 'french gastronomy', range_of_price: '$$$', location: 'tours' },
  { name: 'Pokawa', type_of_food: 'hawaïan', category: 'pokebowls', range_of_price: '$', location: 'paris' },

]

router.get('/', (request, response) => {
  response.json({
    restaurants: restaurants
  })
})


router.get('/:name/', (request, response, next) => {
  const name = request.params.name

  const restaurant = restaurants.find((x) => x.name === name)

  if (!restaurant) {
    next()
    // response.status(404).json({
    //   message: `Could not find student with name ${name}`,
    // })
    return
  }

  response.json(restaurant)
})

router.get('/:category/', (request, response, next) => {
  const category = request.params.category

  const restaurant = restaurants.find((x) => x.category === category)

  if (!restaurant) {
    next()
    // response.status(404).json({
    //   message: `Could not find student with name ${name}`,
    // })
    return
  }

  response.json(restaurant);
})

router.get('/:type_of_food/', (request, response, next) => {
  const type_of_food = request.params.type_of_food

  const restaurant = restaurants.find((x) => x.type_of_food === type_of_food)

  if (!restaurant) {
    next()
    // response.status(404).json({
    //   message: `Could not find student with name ${name}`,
    // })
    return
  }

  response.json(restaurant);
})

router.post('/', (request, response) => {
  //const restaurant = request.body

  // if (!restaurant.name || typeof restaurant.name !== 'string') {
  //   response.status(400).json({
  //     message: 'Restaurant name not provided',
  //   })
  //   return
  // }

  // if (
  //   !student.grade ||
  //   !validGrades.some((x) => areSameWithoutAccentsOrCase(x, student.grade))
  // ) {
  //   response.status(400).json({
  //     message: `Grade is not valid. Please choose from: ${validGrades.join(
  //       ', '
  //     )}`,
  //   })
  //   return
  // }

  restaurants.push(request.body)

  response.status(201).json({
    message: 'message received!',
    body: request.body,
  })
})


module.exports = router;
