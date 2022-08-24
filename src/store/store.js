import { createStore, compose, applyMiddleware } from 'redux'
import combinedReducers from './combinedReducers'
import createSaga from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSaga()

const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
    combinedReducers,
    compose(
        applyMiddleware(sagaMiddleware),
        dev
    )
)

sagaMiddleware.run(sagas)