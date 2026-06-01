import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BASE_URL } from '../../../config';
import toast from 'react-hot-toast';

const CheckoutForm = ({ order, onSuccess }) => {
  const { _id: orderId, price } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    setProcessing(true);

    try {
     
      const res = await fetch(`${BASE_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price }),
      });

      if (!res.ok) throw new Error('Failed to create payment intent');

      const { clientSecret } = await res.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        toast.error(error.message);
        setProcessing(false);
      } else if (paymentIntent.status === 'succeeded') {
        
        const updateRes = await fetch(`${BASE_URL}/orders/${orderId}/payment`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ paymentStatus: 'paid' }),
        });

        const updateData = await updateRes.json();
        if (updateData.modifiedCount > 0) {
          onSuccess();
        } else {
          toast.error('Failed to update payment status');
        }
        setProcessing(false);
      }
    } catch (error) {
      toast.error('An error occurred during payment.');
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-primary btn-sm mt-4"
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
