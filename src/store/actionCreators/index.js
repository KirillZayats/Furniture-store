import * as countActions from './countActions';
import * as productsActions from './productsActions';
import * as categoryActions from './categoryActions';
import * as productActions from './productActions';

export const actions = {
    ...countActions,
    ...productsActions,
    ...categoryActions,
    ...productActions
}