# wallet-management-api

## User Registration (POST /api/auth/signup):
### Request Body:
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}

### Expected Response (Success):
{
  "message": "User registered successfully"
}

### Expected Response (Error - User Already Exists):
{
  "message": "User already exists"
}

## User Login (POST /api/auth/login):
### Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

### Expected Response (Success):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

### Expected Response (Error - Invalid Credentials):
{
  "message": "Invalid credentials"
}

## Add Expense (POST /api/expenses):
### Request Body:
{
  "title": "Groceries",
  "date": "2024-05-08",
  "amount": 50,
  "category": "Food"
}

### Expected Response (Success):
{
  "message": "Expense added successfully"
}

### Expected Response (Error - Validation Failed):
{
  "errors": [
    { "msg": "Title is required", "param": "title" },
    { "msg": "Date is required", "param": "date" }
  ]
}

## Add Expense (POST /api/expenses):
### Request Body:
{
  "title": "Lunch with colleagues",
  "date": "2024-05-08",
  "amount": 25,
  "category": "Food"
}

### Expected Response (Success):
{
  "message": "Expense added successfully"
}

### Expected Response (Error - Validation Failed):
{
  "errors": [
    { "msg": "Title is required", "param": "title" },
    { "msg": "Date is required", "param": "date" },
    { "msg": "Amount must be a valid number", "param": "amount" }
  ]
}

## Retrieve Expenses (GET /api/expenses):

{
  "totalExpenses": 25,
  "currentPage": 1,
  "totalPages": 3,
  "expenses": [
    { "title": "Lunch with colleagues", "date": "2024-05-08", "amount": 25, "category": "Food" },
    { "title": "Groceries", "date": "2024-05-07", "amount": 50, "category": "Food" },
    // More expenses...
  ]
}

## Grouped Expenses (GET /api/expenses/grouped):
### Expected Response (Success):
{
  "totalExpenses": 25,
  "expensesByCategory": {
    "Food": [
      { "title": "Lunch with colleagues", "date": "2024-05-08", "amount": 25 },
      { "title": "Groceries", "date": "2024-05-07", "amount": 50 }
    ],
    "Transportation": [
      { "title": "Fuel", "date": "2024-05-08", "amount": 40 }
    ],
  }
}
