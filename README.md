# Development

Steps to set up the database

1. Set up the database

```
docker compose up -d
```

2. Rename .env.template to .env
3. Replace environment variables
4. Execute the command `npm install`
5. Execute the command `npm run dev`
6. Prisma commands

```
npx prisma migrate dev
npx prisma generate
```

7. Execute seed to [create local database](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
