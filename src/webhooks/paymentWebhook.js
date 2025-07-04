const express = require('express');
const stripeService = require('../services/stripeService');
const razorpayService = require('../services/razorpayService');

const router = express.Router();

router.post('/stripe', async (req, res) => {
    const event = req.body;

    switch (event.type) {
        case 'payment_intent.succeeded':
            await stripeService.handlePaymentSuccess(event.data.object);
            break;
        case 'payment_intent.payment_failed':
            await stripeService.handlePaymentFailure(event.data.object);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send('Webhook received');
});

router.post('/razorpay', async (req, res) => {
    const event = req.body;

    if (event.event === 'payment.captured') {
        await razorpayService.handlePaymentSuccess(event.payload.payment);
    } else if (event.event === 'payment.failed') {
        await razorpayService.handlePaymentFailure(event.payload.payment);
    } else {
        console.log(`Unhandled event type ${event.event}`);
    }

    res.status(200).send('Webhook received');
});

module.exports = router;