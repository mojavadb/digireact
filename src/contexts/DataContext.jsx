import { createContext, useContext, useReducer } from "react"
import useFetchDataReducer from "../hooks/useFetchDataReducer";

const DataContext = createContext(null);

const initialState = {
  cities: [],
  stories: [],
  benefits: [],
  amazing: [],
  baners: [],
  amazingSuperMarket: [],
  ShopBasedOnCategory: [],
  celebratedBrands: [],
  ProductOverView: [],
  bestSelling: [],
  SelectedDiscountedProduct: [],
  articles: [],
  Guarantee: [],
  BtmImageSrc: [],
  bedges: [],
  sliders: [],
  isLoading: false,
  error: ""
};

function reducer(state, action){
  switch(action.type){
    case "loading":
      return(
        {...state, isLoading: true}
      );
    case "loaded/cities":
      return({
        ...state, isLoading: false, cities: action.payload
      });
    case "loaded/stories":
      return({
        ...state, isLoading: false, stories: action.payload
      });
    case "loaded/benefits":
      return({
        ...state, isLoading: false, benefits: action.payload
      });
    case "loaded/amazing":
      return({
        ...state, isLoading: false, amazing: action.payload
      });
    case "loaded/baners":
      return({
        ...state, isLoading: false, baners: action.payload
      });
    case "loaded/amazingSuperMarket":
      return({
        ...state, isLoading: false, amazingSuperMarket: action.payload
      });
    case "loaded/ShopBasedOnCategory":
      return({
        ...state, isLoading: false, ShopBasedOnCategory: action.payload
      });
    case "loaded/celebratedBrands":
      return({
        ...state, isLoading: false, celebratedBrands: action.payload
      });
    case "loaded/ProductOverView":
      return({
        ...state, isLoading: false, ProductOverView: action.payload
      });
    case "loaded/bestSelling":
      return({
        ...state, isLoading: false, bestSelling: action.payload
      });
    case "loaded/bedges":
      return({
        ...state, isLoading: false, bedges: action.payload
      });
    case "loaded/SelectedDiscountedProduct":
      return({
        ...state, isLoading: false, SelectedDiscountedProduct: action.payload
      });
    case "loaded/articles":
      return({
        ...state, isLoading: false, articles: action.payload
      });
    case "loaded/Guarantee":
      return({
        ...state, isLoading: false, Guarantee: action.payload
      });
    case "loaded/BtmImageSrc":
      return({
        ...state, isLoading: false, BtmImageSrc: action.payload
      });
    case "rejected":
      return({
        ...state, isLoading: false, error: action.payload
      });
    default:
      throw new Error("Unknown action type");
  }
}

function DataProvider({children}) {
  const [{
    cities ,
    stories ,
    benefits ,
    amazing ,
    baners ,
    amazingSuperMarket ,
    ShopBasedOnCategory ,
    celebratedBrands ,
    ProductOverView ,
    bestSelling ,
    SelectedDiscountedProduct ,
    articles ,
    Guarantee ,
    BtmImageSrc ,
    bedges , 
    isLoading , 
    error
  }, dispatch] = useReducer(
    reducer, initialState
  );

  useFetchDataReducer(dispatch, "cities");
  useFetchDataReducer(dispatch, "stories");
  useFetchDataReducer(dispatch, "benefits");
  useFetchDataReducer(dispatch, "amazing");
  useFetchDataReducer(dispatch, "baners");
  useFetchDataReducer(dispatch, "amazingSuperMarket");
  useFetchDataReducer(dispatch, "ShopBasedOnCategory");
  useFetchDataReducer(dispatch, "celebratedBrands");
  useFetchDataReducer(dispatch, "ProductOverView");
  useFetchDataReducer(dispatch, "bestSelling");
  useFetchDataReducer(dispatch, "SelectedDiscountedProduct");
  useFetchDataReducer(dispatch, "articles");
  useFetchDataReducer(dispatch, "Guarantee");
  useFetchDataReducer(dispatch, "BtmImageSrc");
  useFetchDataReducer(dispatch, "bedges");

  return (
    <DataContext.Provider value={{
      cities ,
      stories ,
      benefits ,
      amazing ,
      baners ,
      amazingSuperMarket ,
      ShopBasedOnCategory ,
      celebratedBrands ,
      ProductOverView ,
      bestSelling ,
      bedges , 
      SelectedDiscountedProduct ,
      articles ,
      Guarantee ,
      BtmImageSrc ,
      isLoading ,
      error
    }}>
      {children}
    </DataContext.Provider>
  )
}

function useData(){
  const context = useContext(DataContext);
  if(context === undefined){
    throw new Error("DataContext was used outside the CitiesProvider");
  }
  return context;
}

export {DataProvider, useData};
