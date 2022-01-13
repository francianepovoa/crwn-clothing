//It imports the React library.
import React from "react";

//It imports the Directory component from the directory component folder.
import Directory from "../../components/directory/directory.component";

//It imports the HomePageContainer component from the homepage.styles file.
import { HomePageContainer } from "./homepage.styles";

/*
1. It’s importing the Directory component from the components folder.
2. It’s creating a HomePageContainer component that will wrap the Directory component.
3. It’s rendering the HomePageContainer component.
*/
const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

//It creates a React component called HomePage.
export default HomePage;
