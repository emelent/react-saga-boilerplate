import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import rootSaga from '../sagas'


export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)

const configureStore = (preloadedState) => {
	const store = createStore(
		combineReducers({
			...reducer,
			router: routerReducer
		}),
		preloadedState,
		applyMiddleware(routeMiddleware, sagaMiddleware)
	)
	sagaMiddleware.run(rootSaga)
	return store
}

export default configureStore
