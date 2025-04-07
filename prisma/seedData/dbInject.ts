import fs from 'fs';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

if (!prisma) {
  console.error('Prisma client is not initialized');
  process.exit(1);
}

async function seed() {
  try {
    // Read seed data
    const data = JSON.parse(fs.readFileSync('prisma/seedData/seed-data.json', 'utf8'));

    // Clear existing data
    console.log('Clearing existing data...');
    await prisma.post.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
    console.log('Existing data cleared successfully.');

    // Insert Users, Profiles, and Posts into your DB
    for (const item of data) {
      try {
        // Create user
        console.log(`Creating user: ${item.name}`);
        const createdUser  = await prisma.user.create({
          data: {
            id: item.id,
            name: item.name,
            email: item.email,
            emailVerified: item.emailVerified,
            image: item.image,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          },
        });

        // Create profile
        if (item.profile) {
          console.log(`Creating profile for user: ${item.name}`);
          await prisma.profile.create({
            data: {
              id: item.profile.id,
              userId: item.profile.userId,
              bio: item.profile.bio,
              avatarUrl: item.profile.avatarUrl,
              location: item.profile.location,
              interests: item.profile.interests,
              createdAt: item.profile.createdAt,
              updatedAt: item.profile.updatedAt,
            },
          });
        }

        // Create posts
        if (item.posts && item.posts.length > 0) {
          console.log(`Creating posts for user: ${item.name}`);
          await prisma.post.createMany({
            data: item.posts.map((p: any) => ({
              id: p.id,
              userId: p.userId,
              imageUrl: p.imageUrl,
              caption: p.caption,
              createdAt: p.createdAt,
              updatedAt: p.updatedAt,
            })),
          });
        }
      } catch (error) {
        console.error(`Error seeding user ${item.id}:`, error);
      }
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});