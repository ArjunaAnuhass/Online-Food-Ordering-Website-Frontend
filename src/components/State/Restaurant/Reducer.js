import {CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_EVENTS_FAILURE, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS} from './ActionType';

const initialState = {
    restaurants: [],
    userRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantEvents: [],
    categories: []
}


export const restaurantReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_RESTAURANT_REQUEST:
            case GET_ALL_RESTAURANT_REQUEST:
                case DELETE_RESTAURANT_REQUEST:
                    case UPDATE_RESTAURANT_REQUEST:
                        case GET_RESTAURANT_BY_ID_REQUEST:
                            case CREATE_CATEGORY_REQUEST:
                                case GET_RESTAURANT_CATEGORY_REQUEST:
                                    return {
                                        ...state,
                                        loading: true,
                                        error: null
                                    };

        case CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                userRestaurant: action.payload
            };

        case GET_ALL_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload,
            };

        case GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload,
                restaurants: action.payload,
            };

        case GET_RESTAURANT_BY_USER_ID_SUCCESS:
            case UPDATE_RESTAURANT_STATUS_SUCCESS:
                case UPDATE_RESTAURANT_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        userRestaurant: action.payload,
                    };

        case DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                restaurants: state.restaurants.filter(
                    (item) => item.id !== action.payload
                ),
                userRestaurant: state.userRestaurant.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantEvents: [...state.restaurantEvents, action.payload],
            };


        //get all event success case

        //get restaurant event success case

        //delete event success case

        //create category success case 

        //get restaurant category success case

        case GET_RESTAURANT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            }

        case CREATE_RESTAURANT_FAILURE:
            case GET_ALL_RESTAURANT_FAILURE:
                case DELETE_RESTAURANT_FAILURE:
                    case UPDATE_RESTAURANT_FAILURE:
                        case GET_RESTAURANT_BY_ID_FAILURE:
                            case CREATE_EVENTS_FAILURE:
                                case CREATE_CATEGORY_FAILURE:
                                    case GET_RESTAURANT_CATEGORY_FAILURE:
                                        return {
                                            ...state,
                                            loading: false,
                                            error: action.payload,
                                        };



        default:
            return state;

    }
};

export default restaurantReducer;