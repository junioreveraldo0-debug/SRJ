
Estoque SRJ - v18 (Redis-ready + Vercel)

Overview
- This release supports Upstash Redis for cloud persistence. If UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are set, the app will store data in Redis. Otherwise it falls back to local JSON files under /data for testing.
- Admin user: admin / 123456 (run node scripts/create_admin_local.js to create)

Local testing (Windows)
1. Extract ZIP.
2. Open PowerShell in project folder.
3. Run:
   npm install
   node scripts/create_admin_local.js
   npm run dev
4. Open http://localhost:3000 and login with admin / 123456

Using Upstash (optional)
1. Create a Redis database on https://upstash.com and copy the REST URL and Token.
2. In your local project create a file named .env.local with:
   UPSTASH_REDIS_REST_URL=your_url
   UPSTASH_REDIS_REST_TOKEN=your_token
   JWT_SECRET=your_jwt_secret_here
3. Restart the dev server (npm run dev). The app will now use Redis for read/write operations.

Deploy to Vercel
1. Push your repository to GitHub.
2. In Vercel, import the repo and add Environment Variables:
   - UPSTASH_REDIS_REST_URL
   - UPSTASH_REDIS_REST_TOKEN
   - JWT_SECRET
3. Deploy; Vercel will build and the site will be live.

Notes
- The code is hybrid: Redis preferred, local JSON fallback for safety/testing.
- Keys in Redis are stored as JSON strings under 'srj:<collection>' (e.g. srj:users, srj:artigos, srj:rolls).
