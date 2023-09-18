import * as countActions from './countActions';
import * as productsActions from './productsActions';
import * as categoryActions from './categoryActions';
import * as productActions from './productActions';
import * as cartActions from './cartActions';

export const actions = {
    ...countActions,
    ...productsActions,
    ...categoryActions,
    ...productActions,
    ...cartActions
}