import React from 'react';

const PayPalCompontent = () => {
  const PayPal = window.PayPal
  return (
    <div id='donate-button-container' className='d-flex justify-content-start'>
      <button
        type='button'
        id='donate-button'
        className='btn btn-secondary btn-paypal btn-lg btn-rounded'
      >
        Give Now
      </button>
      {PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'NH88EGWKYZ858',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
      }).render('#donate-button')}
    </div>
  );
};

export default PayPalCompontent;
