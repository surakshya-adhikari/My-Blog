import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/conf";

function DeletePost({ onDelete }) { // Accept onDelete function
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service
        .deletePost(slug)
        .then(() => {
          console.log("Post deleted successfully");

          if (onDelete) {
            onDelete(slug); // Remove post from UI immediately
          }

          navigate("/"); // Redirect after update
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate, onDelete]);

  return (
    <div className="py-8 text-center">
      <h2 className="text-xl font-semibold">Deleting post...</h2>
    </div>
  );
}

export default DeletePost;
