import React, { useState } from "react";
import "./RatingCard.css";

export default function RatingCard() {
  const [rating, setRating] = useState(0);     // Final selected rating
  const [hover, setHover] = useState(0);       // Temporary hover rating
  const [comment, setComment] = useState("");  // Feedback text

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a star rating before submitting.");
      return;
    }

    const submissionData = {
      username: "USER NAME", // Replace with dynamic username if needed
      comment,
      rating,
    };

    console.log("Submitted:", submissionData);

    // Reset form
    setRating(0);
    setHover(0);
    setComment("");
  };

  return (
    <div className="rating-card">
      <div className="user-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="user avatar"
          className="avatar"
        />
        <span className="user-name">USER NAME</span>
      </div>

      {/* RATING SELECTOR */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        className="feedback-box"
        placeholder="Write your feedback here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Show only numeric rating */}
      {rating > 0 && (
        <div className="rating-value-text">Rating: {rating.toFixed(1)}</div>
      )}

      <button className="submit-btn" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}