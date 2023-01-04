import React, { useState, useEffect } from "react";
import PostPreview from "../components/PostPreview";

const PostsPage = () => {
	const [posts, setPosts] = useState([]);
	const [totalPostsCount, setTotalPostsCount] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/api/v1/post/all", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			res.json().then((data) => {
				setPosts(data.posts);
				setTotalPostsCount(data.total);
			});
		});
	}, []);

	return (
		<div
			style={{
				backgroundColor: "#F1F3F5",
				width: "100vw",
				height: "100vh",
				padding: "4vh 5vw",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					textAlign: "left",
				}}
			>
				SungHyuk-log
			</h1>
			<div
				style={{
					width: "50vw",
				}}
			>
				<h2
					style={{
						textAlign: "left",
						fontSize: "2vw",
						fontWeight: "bold",
						height: "7vh",
						borderBottom: "1px solid #000000",
					}}
				>
					All posts ({totalPostsCount})
				</h2>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: "3vh",
					}}
				>
					{posts
						? posts.map((item, index) => {
								return <PostPreview post={item} key={index} />;
						  })
						: null}
				</div>
			</div>
		</div>
	);
};

export default PostsPage;
