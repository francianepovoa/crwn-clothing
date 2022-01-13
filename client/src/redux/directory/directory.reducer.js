/*
1. First, we create an array of objects that will be used to populate the store.
2. Next, we create an object that will be used to create the store.
3. Then, we create an object that will be used to create the store’s reducer.
4. Finally, we create the store and export it.
*/
const INITIAL_STATE = {
	sections: [
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			linkUrl: "shop/hats",
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			linkUrl: "shop/jackets",
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl: "shop/sneakers",
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			linkUrl: "shop/womens",
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			linkUrl: "shop/mens",
		},
	],
};

/*
1. The directoryReducer function is called with the default state and the action.
2. The switch statement checks the action.type and compares it to the default case.
3. If the action.type is not equal to the default case, the switch statement returns the action.type.
4. If the action.type is equal to the default case, the switch statement returns the default state.
*/
const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

//It creates a reducer that will be used to store the directory data.
export default directoryReducer;
