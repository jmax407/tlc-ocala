// import { useEffect } from "react";
// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     usePayPalScriptReducer
// } from "@paypal/react-paypal-js";


// const PayPalBtn = () => {

//   return (
//     <div id="donate-button-container" className="d-flex justify-content-center">
//         <button type="button" id="donate-button" className="btn btn-secondary btn-paypal btn-lg btn-rounded">Give Now</button>
//         <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charSet="UTF-8"></script>
//         <script>
//         {PayPal.Donation.Button({
//         env:'production',
//         hosted_button_id:'NH88EGWKYZ858',
//         image: {
//         src:'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
//         alt:'Donate with PayPal button',
//         title:'PayPal - The safer, easier way to pay online!',
//         }
//         }).render('#donate-button')}
//         </script>
//     </div>
//   )
// }

// export default PayPalBtn