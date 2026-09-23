# Kaamly

Kaamly uses a Django REST API backend and a Next.js frontend.

## Technology

- Python 3.12, 3.13, or 3.14
- Django 6.1.1
- Node.js 20.9 or newer
- Next.js 16.3.6
- React 19.3.0
- TypeScript 6.0.3
- VS Code (recommended)

## Run the backend

Open a terminal in the project root:

```powershell
cd backend
py -3.14 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API is available at <http://127.0.0.1:8000/api/health/>.

## Run the frontend

Open a second terminal in the project root:

```powershell
cd frontend
npm ci
npm run dev
```

Open <http://localhost:3000>. The frontend calls the Django API at `http://127.0.0.1:8000` by default.

## Verify the frontend

```powershell
cd frontend
npm run lint
npm run build
```

## Environment variables

To use a different API URL, copy `frontend/.env.local.example` to `frontend/.env.local` and change:

```text
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

## For team members

After cloning or pulling the project:

```powershell
git pull origin main
cd frontend
npm ci
```

`package-lock.json` is committed so everyone installs the same frontend package versions.
