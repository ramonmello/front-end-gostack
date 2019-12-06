import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewres) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewres)
        )
      : applyMiddleware(...middlewres);
  return createStore(reducers, enhancer);
};
