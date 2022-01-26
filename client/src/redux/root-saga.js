//It imports all the redux-saga effects.
import { all, call } from "redux-saga/effects";

//It imports the shopSagas function from the shop/shop.sagas file.
import { shopSagas } from "./shop/shop.sagas";

//It imports the userSagas function from the user/user.sagas file.
import { userSagas } from "./user/user.sagas";

//It imports the cartSagas function from the cart/cart.sagas file.
import { cartSagas } from "./cart/cart.sagas";

/*
1. We’re calling the `all` function from the `redux-saga` library.
2. We’re passing in an array of generators.
3. We’re calling the `call` function from the `redux-saga` library.
4. We’re passing in the `shopSagas` generator.
5. We’re calling the `call` function from the `redux-saga` library.
6. We’re passing in the `userSagas` generator.
7. We’re calling the `call` function from the `redux-saga` library.
8. We’re passing in the `cartSagas` generator.
*/
export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
