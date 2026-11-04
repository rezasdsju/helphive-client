# 🐝 HelpHive — Volunteer & Social Impact Platform
### Empowering Communities, One Good Deed at a Time.

HelpHive is a people-powered social development platform that connects individuals through volunteering opportunities and local social service events, empowering communities to create meaningful change together.

## Live Demo

**Frontend:** [https://helphive-community-indol.vercel.app/](https://helphive-community-indol.vercel.app/)

## Backend API

**Base URL:** [https://helphive-community-server.vercel.app/](https://helphive-community-server.vercel.app/)

**Backend Repo:** [HelpHive Server](https://github.com/rezasdsju/helphive-server)


## Features

### Core Features

- Email and password authentication with Google sign-in
- Event creation for authenticated users with JWT-based authorization
- Public upcoming events page with individual event details and category-based filtering
- JWT-protected event participation with duplicate join prevention
- JWT-protected joined events page with filters for all and upcoming events
- JWT-protected event management page to view created events, update event details, and delete events

### Additional Features

- Profile menu with sign-out
- Persistent light and dark theme toggle
- Responsive navbar and footer
- Homepage with banner, feature highlights, upcoming events carousel, community gallery, and a newsletter section (design only)

## Technologies

- **Framework:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, React Icons
- **Authentication:** Better Auth
- **Authorization:** JWT
- **Database:** MongoDB
- **Theming:** next-themes


## Project Structure

```text
helphive-client/
├── public/                  # Static assets and images
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   │   ├── (auth)/          # Authentication pages
│   │   ├── api/             # Authentication API routes
│   │   ├── create-event/    # Event creation page
│   │   ├── joined-events/   # Joined events page
│   │   ├── manage-events/   # Event management page
│   │   └── upcoming-events/ # Upcoming events and details
│   ├── components/
│   │   ├── events/          # Event-related components
│   │   ├── homepage/        # Homepage sections
│   │   ├── profile/         # Profile components
│   │   ├── providers/       # Application providers
│   │   ├── shared/          # Shared layout components
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Authentication and utility functions
│   └── types/               # TypeScript type definitions
├── .env.local               # Environment variables
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md
```

## Getting Started

Follow these steps to run HelpHive locally.

### 1. Clone the Repository

```bash
git clone https://github.com/rezasdsju/helphive-client.git
cd helphive-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
NEXT_PUBLIC_BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_BASE_API_URL=
```

**Environment Variable Description:**

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `BETTER_AUTH_SECRET` | Secret key used by Better Auth |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Better Auth application URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_BASE_API_URL` | HelpHive backend API base URL |

Replace the empty values with your own credentials and configuration.

**Important:** Never commit your actual environment variables or secret credentials to GitHub.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Backend

HelpHive uses a separate Express.js backend with MongoDB.

- **Live API:** https://helphive-community-server.vercel.app/
- **Backend Repository:** https://github.com/rezasdsju/helphive-server

The backend handles event creation, retrieval, participation, event management, and JWT verification.

---

## API Endpoints

The following endpoints are available in the HelpHive backend.

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/` | Public | API status and endpoint information |
| `GET` | `/upcoming-events` | Public | Retrieve upcoming events |
| `GET` | `/upcoming-events/limit-6` | Public | Retrieve six upcoming events |
| `GET` | `/upcoming-events/:id` | Public | Retrieve event details |
| `POST` | `/create-event` | Protected | Create a new event |
| `POST` | `/add-participant/:id` | Protected | Join an event |
| `GET` | `/joined-events` | Protected | Retrieve joined events |
| `GET` | `/manage-events` | Protected | Retrieve events created by the user |
| `PATCH` | `/manage-events/:id` | Protected | Update an event created by the user |
| `DELETE` | `/manage-events/:id` | Protected | Delete an event created by the user |

Protected endpoints require a valid JWT access token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

---

## Authentication & Authorization

- Better Auth handles email/password authentication and Google sign-in.
- User sessions are maintained through Better Auth.
- JWT tokens are used to authorize protected API requests.
- The backend verifies JWT tokens using Better Auth's JSON Web Key Set (JWKS).
- Only authenticated users can access protected API endpoints.
- Users can only update or delete events created by themselves.

---

## Theme Support

HelpHive supports both light and dark themes using `next-themes`.

Users can switch between light and dark modes through the theme toggle button. Their theme preference persists across visits.

---

## Deployment

- **Frontend:** Deployed on Vercel.
- **Backend:** Deployed on Vercel.
- **Database:** MongoDB.

---

## Contributing

Contributions, suggestions, and feedback are welcome!

If you find a bug or have an idea to improve HelpHive, feel free to open an issue or submit a pull request.

---

## Author

**Rezaul Karim Rifat**

- GitHub: https://github.com/rezasdsju
- Frontend Repository: https://github.com/rezasdsju/helphive-client
- Backend Repository: https://github.com/rezasdsju/helphive-server

---

<p align="center">
  Made with ❤️ to make communities stronger.
</p>