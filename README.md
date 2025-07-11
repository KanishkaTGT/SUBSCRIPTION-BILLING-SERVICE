# Subscription & Billing Service

This project is a microservice designed to handle plan-based pricing, limits, and invoicing for subscription-based services. It integrates with payment gateways like Stripe and Razorpay to manage billing operations efficiently.

## Purpose

The Subscription & Billing Service provides functionalities for managing subscriptions, tracking usage, and handling invoicing and payments. Key features include:

- QR usage meter and overage alerts
- Invoice and payment status APIs
- Webhooks for payment confirmation

## Tech Stack

- Node.js
- Stripe
- Razorpay
- Express.js

## Project Structure

```
subscription-billing-service
├── src
│   ├── controllers
│   │   └── billingController.js
│   ├── routes
│   │   └── billingRoutes.js
│   ├── services
│   │   ├── stripeService.js
│   │   ├── razorpayService.js
│   │   └── meterService.js
│   ├── webhooks
│   │   └── paymentWebhook.js
│   ├── utils
│   │   └── index.js
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/subscription-billing-service.git
   ```

2. Navigate to the project directory:
   ```
   cd subscription-billing-service
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API keys and other configuration variables.

5. Start the application:
   ```
   npm start
   ```

## API Usage

### Endpoints

- **Create Invoice**: `POST /api/billing/invoice`
- **Check Payment Status**: `GET /api/billing/payment-status/:id`
- **Track QR Usage**: `POST /api/billing/usage`

Refer to the individual route files for more detailed API documentation.

## Webhooks

The service listens for incoming webhook events from payment providers to confirm payment status and update records accordingly. Ensure that your payment provider is configured to send webhooks to the appropriate endpoint.

## License

This project is licensed under the MIT License.#   S U B S C R I P T I O N - B I L L I N G - S E R V I C E  
 