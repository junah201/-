import React from "react";
import PostTag from "./common/PostTag";

const PostPreview = ({ post }) => {
	const date = new Date(post.created_at);
	post.created_at = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);

	return (
		<div
			style={{
				backgroundColor: "#ffffff",
				width: "50vw",
				borderRadius: "1vw",
				display: "flex",
				flexDirection: "column",
				padding: "2vw",
				marginBottom: "2vh",
				textAlign: "left",
			}}
		>
			<h2
				style={{
					fontSize: "1.5vw",
					fontWeight: "bold",
					marginBottom: "1vh",
				}}
			>
				{post.title}
			</h2>
			<span style={{ marginBottom: "1vh" }}>{post.created_at}</span>
			<p>{post.content}</p>
			<PostTag tag={post.tag} />
		</div>
	);
};

export default PostPreview;
