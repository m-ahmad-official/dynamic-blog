"use client";

import { useState, useEffect } from "react";

export default function CommentSection() {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (index: number) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };

    return (
        <div className="flex items-center justify-center sm:my-32 my-20">
            <div className="mx-auto p-8 sm:w-[450px] bg-gray-100 rounded-lg shadow-[0_4px_12px_1px_rgba(0,0,0,0.4)]">
                <h2 className="text-2xl font-bold mb-6 text-center">Comment Section</h2>

                <div className="mb-8">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add your comment..."
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b00813]"
                    ></textarea>
                    <button
                        onClick={handleAddComment}
                        className="mt-2 w-full py-2 bg-[#7A0000] text-white rounded-lg hover:bg-[#b00813] transition-all ease-out duration-300"
                    >
                        Add Comment
                    </button>
                </div>

                <div>
                    {comments.length > 0 ? (
                        <ul className="space-y-3">
                            {comments.map((comment, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border"
                                >
                                    <span className="text-black">{comment}</span>
                                    <button
                                        onClick={() => handleDeleteComment(index)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-center">No comments yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
