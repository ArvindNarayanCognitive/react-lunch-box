import * as types from './../constants';
import * as http from 'axios';

const asycGetDishes = () => {
  return dispatch=> {
    http.get('https://demo0823267.mockable.io/getItems').then(
      res => dispatch({type: types.GET_DISHES, data: res.data} )
    );
  }
}

export default asycGetDishes;