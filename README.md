# Kaamly

This App uses Django REST API and a Next.js frontend.

## Requirements

- Python 3.11+
- Node.js 20+
- VS Code (recommended)

## Run the backend

Open a terminal at this project root:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API is available at `http://127.0.0.1:8000/api/health/`.

## Run the frontend

Open another terminal at this project root:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`. The frontend calls the Django health endpoint at `http://127.0.0.1:8000` by default.

To use another API URL, copy `frontend/.env.local.example` to `frontend/.env.local` and change `NEXT_PUBLIC_API_URL`.
