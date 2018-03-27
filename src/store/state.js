import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	activeClass: [
  	'detail-passive', 'detail-active', 'detail-passive', 'detail-passive', 'detail-active',
  	'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive',
		'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive',
  	'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive',
 		'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive',
  	'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 
  	'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive', 'detail-passive'

	],
	hoverClass: [
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover',
		'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover', 'detail-nohover'
	],
	nameDetail: [
		'Левое колесо', 'Левое переднее крыло', 'Левое днище', 'Левое колесо', 'Левая передняя дверь',
		'Левая задняя дверь', 'Левое заднее крыло', 'Левое переднее стекло', 'Левое заднее стекло', 'Левая передняя ручка',
		'Левая задняя ручка', 'Правое переднее колесо', 'Правое переднее крыло', 'Правое днище', 'Правое заднее колесо',
		'Правая передняя дверь', 'Правая задняя дверь', 'Правое заднее крыло', 'Капот', 'Лобовое стекло',
		'Правое переднее стекло', 'Правое заднее стекло', 'Крыша', 'Левое зеркало', 'Заднее стекло',
		'Багажник', 'Передний бампер', 'Левая задняя фара', 'Задний бампер', 'Правая передняя ручка',
		'Правая задняя ручка', 'Правое зеркало', 'Правая задняя фара', 'Левая передняя фара', 'Правая передняя фара'
	],
	addedDetail: [
		'Левое переднее крыло', 'Левая передняя дверь'
	],
	width: 237,
	height: 331,
	message: '',
	classErrorMessage: 'main__error-message_hidden'
};

function mainReducer (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT_ZOOM':
    if (state.width < 287) {
	    return {
	      ...state, ...{width: (state.width + 5), height: (state.height + 7)}
	    };
	  } else return state;

  case 'DECREMENT_ZOOM':
  	if (state.width > 87) {
	  	return {
	  		...state, ...{width: (state.width - 5), height: (state.height - 7)}
	  	};
	  } else return state;

	case 'ADD_DETAIL':
		if (state.activeClass[action.payload] === 'detail-passive') {
			return {
				...state, ...{classErrorMessage: 'main__error-message_hidden'}, ...state.activeClass[action.payload] = 'detail-active', ...state.addedDetail[state.addedDetail.length] = state.nameDetail[action.payload]
			};
		} else {
			return {
				...state, ...{classErrorMessage: 'main__error-message_visible', message: 'Ошибка! Деталь уже добавлена'}
			}
		}

	case 'SWITCH_HOVER':
		if (state.hoverClass[action.payload] === 'detail-nohover') {
			return {
				...state, ...state.hoverClass[action.payload] = 'detail-hover'
			};
		}	else {
			return {
				...state, ...state.hoverClass[action.payload] = 'detail-nohover'
			};
		}

	case 'REQUEST_DETAIL':
		return {
			...state, ...{message: 'Загрузка', classErrorMessage: 'main__error-message_visible'}
		};

	case 'REMOVE_DETAIL':
		for (let i = 0; i < state.nameDetail.length; i++) {
			if (state.addedDetail[action.payload] === state.nameDetail[i]) {
				var numDeleteDetail = i;
			}
		}
		return {
			...state, ...state.addedDetail.splice(action.payload, 1), ...state.activeClass[numDeleteDetail] = 'detail-passive'
		};

	default: 
		return state;
	}
}

const store = createStore(mainReducer, initialState, applyMiddleware(thunk));

export default store;