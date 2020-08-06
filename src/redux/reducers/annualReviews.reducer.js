const annualReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ANNUAL_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default annualReviewsReducer;
