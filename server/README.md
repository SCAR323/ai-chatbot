# AudioStore Backend Server

This is the backend server for the AudioStore application, providing the chatbot API endpoint.

## Running the Server

```bash
cd server
npm start
```

The server will run on http://localhost:5000

## API Endpoints

### POST /api/chat
Handles chatbot messages and returns AI-generated responses.

**Request Body:**
```json
{
  "message": "user message here"
}
```

**Response:**
```json
{
  "response": "bot response here",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/health
Health check endpoint to verify server is running.
