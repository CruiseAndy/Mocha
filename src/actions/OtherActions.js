
/* Types */
import { PAGE_LOCATION } from './types';

/**
 * home: 0
 * sport: 1
 * casino: 2
 * promotions: 3 
 */

export const pageLocation = location => {
  return dispatch => {
    dispatch({
      type: PAGE_LOCATION,
      pageLocationRlt: location
    })
  }
}