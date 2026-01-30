export interface Ingredient {
  item: string;
  amount: string;
  icon: string;
}

export interface Step {
  id: number;
  instruction: string;
  image: string;
  tip?: string;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'Easy Peasy' | 'Super Chef';
  time: string;
  image: string;
  category: 'Snacks' | 'Breakfast' | 'Treats';
  ingredients: Ingredient[];
  steps: Step[];
  safetyTip: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Ants on a Log',
    slug: 'ants-on-a-log',
    description: 'A classic crunchy snack that looks like little ants walking on a log!',
    difficulty: 'Easy Peasy',
    time: '5 mins',
    image: 'https://images.unsplash.com/photo-1601315379734-2255103bb434?auto=format&fit=crop&q=80&w=800',
    category: 'Snacks',
    safetyTip: 'Use a plastic butter knife to spread the peanut butter safely!',
    ingredients: [
      { item: 'Celery sticks', amount: '3-4 pieces', icon: '🥬' },
      { item: 'Peanut butter (or cream cheese)', amount: '4 tablespoons', icon: '🥜' },
      { item: 'Raisins', amount: '1 small box', icon: '🍇' }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Wash your celery sticks under cold water and pat them dry with a paper towel.',
        image: 'https://images.unsplash.com/photo-1597362153121-d1e59aeeed94?auto=format&fit=crop&q=80&w=400',
        tip: 'Make sure they are nice and dry so the "glue" sticks!'
      },
      {
        id: 2,
        instruction: 'Use your plastic knife to fill the "ditch" in the celery with peanut butter.',
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400',
        tip: 'This is the "mud" for our logs!'
      },
      {
        id: 3,
        instruction: 'Place your raisins in a line on top of the peanut butter.',
        image: 'https://images.unsplash.com/photo-1536630596251-b12ba0d7f7cf?auto=format&fit=crop&q=80&w=400',
        tip: 'Look! The ants are marching!'
      }
    ]
  },
  {
    id: '2',
    title: 'Rainbow Fruit Skewers',
    slug: 'rainbow-fruit-skewers',
    description: 'Eat the rainbow with these colorful and healthy fruit sticks!',
    difficulty: 'Easy Peasy',
    time: '10 mins',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800',
    category: 'Snacks',
    safetyTip: 'Be careful with the pointy ends of the wooden sticks!',
    ingredients: [
      { item: 'Strawberries', amount: '5 pieces', icon: '🍓' },
      { item: 'Orange slices', amount: '5 pieces', icon: '🍊' },
      { item: 'Pineapple chunks', amount: '5 pieces', icon: '🍍' },
      { item: 'Grapes', amount: '10 pieces', icon: '🍇' },
      { item: 'Wooden skewers', amount: '5 sticks', icon: '🥢' }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Wash all your fruit and put them in little bowls by color.',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 2,
        instruction: 'Slide one piece of fruit at a time onto the stick.',
        image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=400',
        tip: 'Try to follow the colors of the rainbow: Red, Orange, Yellow, Green, Purple!'
      }
    ]
  },
  {
    id: '3',
    title: 'No-Bake Energy Balls',
    slug: 'no-bake-energy-balls',
    description: 'Sweet and chewy balls that give you super strength for playing!',
    difficulty: 'Super Chef',
    time: '15 mins',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    category: 'Treats',
    safetyTip: 'Ask an adult to help you measure the honey!',
    ingredients: [
      { item: 'Oats', amount: '1 cup', icon: '🥣' },
      { item: 'Honey', amount: '1/4 cup', icon: '🍯' },
      { item: 'Chocolate chips', amount: '1/2 cup', icon: '🍫' },
      { item: 'Peanut butter', amount: '1/2 cup', icon: '🥜' }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Mix all the ingredients together in a big bowl until it gets sticky.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 2,
        instruction: 'Use your hands to roll the mixture into small balls, like play-dough!',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=400',
        tip: 'If it sticks to your hands, put a little water on them!'
      },
      {
        id: 3,
        instruction: 'Put them in the fridge for 30 minutes to get firm.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    id: '4',
    title: 'Yogurt Parfait Party',
    slug: 'yogurt-parfait-party',
    description: 'A fancy breakfast that looks like a dessert in a glass!',
    difficulty: 'Easy Peasy',
    time: '5 mins',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    category: 'Breakfast',
    safetyTip: 'Be careful not to drop the glass!',
    ingredients: [
      { item: 'Greek Yogurt', amount: '1 cup', icon: '🍦' },
      { item: 'Granola', amount: '1/2 cup', icon: '🌾' },
      { item: 'Blueberries', amount: '1/4 cup', icon: '🫐' },
      { item: 'Honey', amount: '1 drizzle', icon: '🍯' }
    ],
    steps: [
      {
        id: 1,
        instruction: 'Put a big spoonful of yogurt at the bottom of your glass.',
        image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 2,
        instruction: 'Add a layer of crunchy granola and some blueberries.',
        image: 'https://images.unsplash.com/photo-1494315153767-9c231f2dfe79?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 3,
        instruction: 'Repeat the layers until the glass is full!',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400'
      }
    ]
  }
];