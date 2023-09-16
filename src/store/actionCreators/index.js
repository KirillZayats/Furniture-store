import * as countActions from './countActions';
import * as productsActions from './productsActions';

export const actions = {
    ...countActions,
    ...productsActions
}