import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'NIX — Educational Robotics Learning Kit',
      description: 'An introductory kit for learning robotics concepts.',
      price: 9999.00,
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      category: 'Kits',
      stock: 50,
    },
    {
      name: 'MARK-3 - Advanced Educational Robotics Platform',
      description: 'Advanced platform for serious robotics engineering.',
      price: 90000.00,
      imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
      category: 'Platforms',
      stock: 10,
    },
    {
      name: 'IoT Cube — Smart Interactive LED Cube',
      description: 'Learn IoT with this interactive smart cube.',
      price: 4999.00,
      imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
      category: 'IoT',
      stock: 100,
    },
    {
      name: 'Hemessi IoT Board – Educational Internet of Things Development Platform',
      description: 'Comprehensive board for IoT development.',
      price: 6999.00,
      imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
      category: 'IoT',
      stock: 75,
    },
    {
      name: 'MARK-2 — Advanced Educational Robotics Platform',
      description: 'Intermediate platform for robotics.',
      price: 17999.00,
      imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
      category: 'Platforms',
      stock: 25,
    },
    {
      name: 'MARK 1 - Beginner Educational Robotics Kit',
      description: 'Perfect starting point for beginners.',
      price: 12999.00,
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
      category: 'Kits',
      stock: 60,
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }
  console.log('Database seeded with dummy products!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
