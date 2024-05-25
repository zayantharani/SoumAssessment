export const productData = [
  {
    id: '1',
    category: 'Mobile Phones',
    brands: [
      {
        id: '1-1',
        brand: 'Apple',
        models: [
          {
            id: '1-1-1',
            model: 'iPhone 8',
            description: 'An older model with a home button',
            variants: [
              { id: '1-1-1-1', name: '64GB', description: '64GB storage' },
              { id: '1-1-1-2', name: '128GB' },
            ],
          },
          {
            id: '1-1-2',
            model: 'iPhone X',
            description: 'First iPhone with Face ID',
            variants: [
              { id: '1-1-2-1', name: '64GB', description: '64GB storage' },
              { id: '1-1-2-2', name: '256GB', description: '256GB storage' },
            ],
          },
        ],
      },
      {
        id: '1-2',
        brand: 'Nokia',
        models: [
          {
            id: '1-2-1',
            model: 'Nokia 6',
            description: 'Affordable smartphone',
            variants: [
              { id: '1-2-1-1', name: '32GB', description: '50+ in stock' },
              { id: '1-2-1-2', name: '64GB' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    category: 'Watches',
    brands: [
      {
        id: '2-1',
        brand: 'Apple',
        models: [
          {
            id: '2-1-1',
            model: 'Apple Watch',
            description: 'Smartwatch with health tracking features',
            variants: [
              { id: '2-1-1-1', name: 'GPS' },
              { id: '2-1-1-2', name: 'GPS + Cellular' },
            ],
          },
        ],
      },
    ],
  },
];
