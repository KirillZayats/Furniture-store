import * as countActions from './countActions';
import * as productsActions from './productsActions';
import * as categoryActions from './categoryActions';
import * as productActions from './productActions';
import * as cartActions from './cartActions';
import * as payProducts from './payActions';
import * as functionsActions from './functionsActions';
import * as userActions from './userActions'
export const actions = {
    ...countActions,
    ...productsActions,
    ...categoryActions,
    ...productActions,
    ...cartActions,
    ...payProducts,
    ...functionsActions,
    ...userActions
}