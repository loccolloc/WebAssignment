import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { IpadReducer } from './reducers/IpadReducer';
import { MacbookReducer } from './reducers/MacbookReducer';
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    IpadReducer,
    MacbookReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))