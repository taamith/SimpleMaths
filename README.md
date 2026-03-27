# SimpleMaths Kids (Android, React Native)

A centralized, scalable React Native architecture for **UKG, Grade 1, and Grade 2** learners following **CBSE and ICSE** patterns.

## Why this setup
- **Android-first** delivery (`react-native run-android`) with a single React Native codebase.
- **Feature modules** for low coupling and easier maintenance.
- **Centralized content/config** to avoid hardcoding and duplicate business logic.
- **Production-ready foundations** for authentication, authorization, API-driven data, and cloud database integration.

## Recommended technology stack (current and practical)
- **React Native + TypeScript**
- **Redux Toolkit** for app state
- **React Navigation** for navigation
- **Axios** + interceptor-based auth token strategy
- **AsyncStorage** for secure-ish local persistence (can be replaced with encrypted storage)
- **Backend (recommended)**: Node.js/NestJS or Firebase/Supabase
- **Database (recommended)**: PostgreSQL (or Firestore if using Firebase)

## Project structure

```text
src/
  app/
    navigation/
    store.ts
  core/
    api/
    config/
    storage/
    theme/
    types/
  modules/
    auth/
    learning/
    profile/
  shared/
    components/
    hooks/
    utils/
  assets/
    content/
```

## Authentication & Authorization design
1. Login via mobile + OTP (`/v1/auth/login`).
2. Receive `accessToken` + `refreshToken`.
3. Persist tokens in storage layer (`tokenStorage`).
4. Axios interceptor injects bearer token for every API call.
5. API enforces authorization with role-aware rules:
   - Parent: child progress + settings
   - Teacher: class-level insights
   - Student: only assigned activities

## Content & curriculum design
- Curriculum content is mapped by grade (`UKG`, `Grade1`, `Grade2`) and activity type.
- Content source can move from local JSON to remote CMS/API without UI rewrite.
- Supports game-driven activities, voice prompts, and reward points.

## Setup

```bash
cp .env.example .env
npm install
npm run android
```

## Environment variables
- `APP_NAME`
- `API_BASE_URL`
- `APP_ENV` (`development | staging | production`)
- `ENABLE_ANALYTICS`

## Next implementation milestones
1. Add animated activity player (phonics, tracing, quiz).
2. Add parent dashboard charts and weekly progress.
3. Integrate push notifications for reminders.
4. Add offline sync (SQLite/MMKV + sync queue).
5. Add telemetry and crash monitoring.

