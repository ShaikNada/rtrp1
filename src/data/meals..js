export const meals = [
    {
      id: '1',
      title: 'Vegetable Frittata with Fruit Salad',
      calories: 512,
      time: 25,
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1064&auto=format&fit=crop',
      protein: 18,
      fat: 12,
      carbs: 45,
      description: 'A delicious vegetable frittata made with farm-fresh eggs, spinach, bell peppers, and feta cheese. Served with a refreshing side of seasonal fruit salad.',
      mealType: 'Breakfast',
      dietType: 'Pescatarian',
      ingredients: [
        '6 large eggs',
        '1/4 cup milk',
        '1 cup spinach, chopped',
        '1/2 red bell pepper, diced',
        '1/2 yellow bell pepper, diced',
        '1/4 cup feta cheese, crumbled',
        '1 tbsp olive oil',
        'Salt and pepper to taste',
        'Assorted seasonal fruits for salad'
      ],
      instructions: [
        'Preheat oven to 375°F (190°C).',
        'Whisk together eggs and milk in a bowl. Season with salt and pepper.',
        'Heat olive oil in an oven-safe skillet over medium heat.',
        'Add spinach and peppers, sauté until softened, about 3-4 minutes.',
        'Pour egg mixture over vegetables and cook until edges start to set, about 2 minutes.',
        'Sprinkle feta cheese on top and transfer skillet to oven.',
        'Bake for 15-20 minutes until frittata is set and slightly golden.',
        'Serve with a side of fresh seasonal fruit salad.'
      ],
      benefits: [
        'High in protein for muscle recovery',
        'Loaded with vitamins from fresh vegetables',
        'Provides essential amino acids from eggs',
        'Balanced meal with protein, healthy fats, and carbohydrates',
        'Antioxidants from fresh fruits support immune function'
      ]
    },
    {
      id: '2',
      title: 'Chia Seeds with Cottage Cheese',
      calories: 380,
      time: 15,
      image: 'https://images.unsplash.com/photo-1543573852-1a2bdc0f1b38?q=80&w=1170&auto=format&fit=crop',
      protein: 22,
      fat: 14,
      carbs: 32,
      description: 'Nutrient-packed chia seeds soaked in almond milk, topped with creamy cottage cheese and a drizzle of honey.',
      mealType: 'Breakfast',
      dietType: 'Pescatarian',
      ingredients: [
        '3 tbsp chia seeds',
        '1 cup almond milk',
        '1/2 cup cottage cheese',
        '1 tbsp honey',
        'Optional: fresh fruits or nuts'
      ],
      instructions: [
        'Mix chia seeds with almond milk in a bowl or jar.',
        'Refrigerate overnight or for at least 4 hours until gel-like.',
        'Stir well before serving.',
        'Top with cottage cheese and a drizzle of honey.',
        'Add optional toppings like fresh fruits or nuts for extra flavor.'
      ],
      benefits: [
        'Rich in omega-3 fatty acids from chia seeds',
        'High protein from cottage cheese',
        'Supports digestion with fiber-rich ingredients',
        'Low glycemic load for stable energy',
        'Helps keep you full longer'
      ]
    },
    {
      id: '3',
      title: 'Hummus with Pita Bread',
      calories: 360,
      time: 15,
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1098&auto=format&fit=crop',
      protein: 10,
      fat: 15,
      carbs: 45,
      description: 'Creamy homemade hummus made with chickpeas, tahini, olive oil, and lemon juice. Served with warm pita bread.',
      mealType: 'Lunch',
      dietType: 'Pescatarian',
      isFavorite: true,
      ingredients: [
        '1 cup cooked chickpeas',
        '2 tbsp tahini',
        '2 tbsp olive oil',
        '1 garlic clove',
        '1 tbsp lemon juice',
        'Salt and paprika to taste',
        '1 pita bread, warmed',
        'Optional: parsley for garnish'
      ],
      instructions: [
        'Blend chickpeas, tahini, garlic, lemon juice, and olive oil in a food processor.',
        'Add salt and paprika to taste. Blend until smooth.',
        'Warm pita bread and cut into triangles.',
        'Serve hummus in a bowl with a drizzle of olive oil and parsley if desired.',
        'Dip and enjoy!'
      ],
      benefits: [
        'Plant-based protein from chickpeas',
        'Healthy fats from olive oil and tahini',
        'Great source of fiber for digestion',
        'Iron and B-vitamins support energy',
        'Low in sugar and highly satiating'
      ]
    },
    {
      id: '4',
      title: 'Quinoa Salmon Bowl',
      calories: 480,
      time: 30,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop',
      protein: 28,
      fat: 16,
      carbs: 39,
      description: 'Fluffy quinoa topped with grilled salmon, avocado, cucumber, and cherry tomatoes. Drizzled with a lemon-dill dressing.',
      mealType: 'Dinner',
      dietType: 'Pescatarian',
      ingredients: [
        '1 salmon fillet',
        '1/2 cup cooked quinoa',
        '1/2 avocado, sliced',
        '1/2 cup cucumber, sliced',
        '1/2 cup cherry tomatoes, halved',
        '1 tbsp olive oil',
        'Juice of 1 lemon',
        '1 tsp fresh dill, chopped',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Cook quinoa according to package instructions and let cool slightly.',
        'Season salmon with salt, pepper, and olive oil, then grill until fully cooked.',
        'Slice avocado, cucumber, and cherry tomatoes.',
        'Whisk lemon juice, olive oil, dill, salt, and pepper to make the dressing.',
        'Assemble bowl with quinoa as the base and arrange veggies and salmon on top.',
        'Drizzle with dressing before serving.'
      ],
      benefits: [
        'High in omega-3 fatty acids from salmon',
        'Quinoa provides complete plant-based protein',
        'Avocado offers heart-healthy fats',
        'Rich in fiber and antioxidants from veggies',
        'Anti-inflammatory and energy-supporting meal'
      ]
    },
    {
      id: '5',
      title: 'Greek Yogurt with Berries',
      calories: 240,
      time: 5,
      image: 'https://images.unsplash.com/photo-1514693328041-a421c4483aaf?q=80&w=1170&auto=format&fit=crop',
      protein: 15,
      fat: 8,
      carbs: 28,
      description: 'Creamy Greek yogurt topped with a mix of fresh berries, a sprinkle of granola, and a drizzle of honey.',
      mealType: 'Snack',
      dietType: 'Pescatarian',
      ingredients: [
        '1 cup Greek yogurt',
        '1/2 cup fresh berries (strawberries, blueberries, raspberries)',
        '2 tbsp granola',
        '1 tsp honey'
      ],
      instructions: [
        'Scoop Greek yogurt into a serving bowl.',
        'Top with fresh berries.',
        'Sprinkle granola evenly over the top.',
        'Drizzle with honey.',
        'Serve immediately and enjoy!'
      ],
      benefits: [
        'Great source of probiotics for gut health',
        'Antioxidants from berries protect cells',
        'Protein-rich for satiety and muscle support',
        'Calcium for strong bones and teeth',
        'Quick, energizing snack with natural sweetness'
      ]
    }
  ];
  
  export const dietOptions = [
    { id: 'pescatarian', name: 'Pescatarian' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'keto', name: 'Keto' },
    { id: 'paleo', name: 'Paleo' },
  ];
  
  export const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  