import React from "react";
import { TodoList } from "./todoList";


//create your first component
const Home = () => {
	return (
		<div className="home">
        <TodoList />
		</div>
	);
};

export default Home;