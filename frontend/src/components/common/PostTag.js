import React from "react";

const PostTag = ({ tag }) => {
	return (
		<span
			style={{
				backgroundColor: "#D9D9D9",
				width: "fit-content",
				padding: "0.3vw 1vw",
				borderRadius: "3vw",
			}}
		>
			{tag}
		</span>
	);
};

export default PostTag;
