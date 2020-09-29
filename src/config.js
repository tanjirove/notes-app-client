export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-20200924",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://0er61lk6ig.execute-api.ap-southeast-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_41LN1zuZn",
    APP_CLIENT_ID: "7dt67k5u50en6tvpbmr7up4q02",
    IDENTITY_POOL_ID: "ap-southeast-2:a227ce86-9f37-4116-b4d1-e1eb9cbe2eef",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_pHyIC0k82RqSPGGG073vr8tT",
};
