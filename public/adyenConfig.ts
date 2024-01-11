export const configuration = {
  locale: "en_US", // The shopper's locale. For a list of supported locales, see https://docs.adyen.com/online-payments/web-components/localization-components.
  environment: "test", // When you're ready to accept live payments, change the value to one of our live environments https://docs.adyen.com/online-payments/components-web#testing-your-integration.
  clientKey: "", // Your client key. To find out how to generate one, see https://docs.adyen.com/development-resources/client-side-authentication. Web Components versions before 3.10.1 use originKey instead of clientKey.
  analytics: {
    enabled: true, // Set to false to not send analytics data to Adyen.
  },
  session: {
    id: "",
    sessionData: ""  },
  showPayButton: true,
  setStatusAutomatically: true,
  // paymentMethodsResponse: {}, // The payment methods response returned in step 1.
  // onChange: handleOnChange, // Your function for handling onChange event
  onSubmit: (state: any, component: any) => {
    console.log("On Submit Executed");
  },
  onAdditionalDetails: (state: any, component: any) => {
    console.log("On Additional Details Executed");
  },
  paymentMethodsConfiguration: {
    card: {
      hasHolderName: true,
      holderNameRequired: true,
      // billingAddressRequired: true,
    },
  },
};
