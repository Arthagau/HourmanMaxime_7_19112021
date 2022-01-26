import React from "react";
import CommentModel from "./CommentModel";

export default function Comments({ comments, onDelete }) {
  return (
    <div className="row d-flex justify-content-center mb-5">
      <div
        className="col-md-11 d-flex
      flex-column
      justify-content-around"
      >
        {comments.map(
          (
            comment // on map les différents commentaires renvoyés auparavant pour recréer un model pour chaque commentaire
          ) => (
            <CommentModel
              comment={comment}
              key={comment.id}
              onDelete={onDelete}
            />
          )
        )}
      </div>
    </div>
  );
}
