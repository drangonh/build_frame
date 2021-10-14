import {
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  RecommendProductAction,
  RecommendProductsState
} from "./recommendProductsActions";

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productList: [],
};

export default (state:RecommendProductsState = defaultState, action: RecommendProductAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

