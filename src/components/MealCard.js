import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";


  const MealCard = ({ 
    id, 
    title, 
    calories, 
    time, 
    image, 
    isFavorite = false, 
    onFavoriteToggle 
  }) => {
    const [favorite, setFavorite] = useState(isFavorite);
  
    const handleFavorite = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newFavoriteState = !favorite;
      setFavorite(newFavoriteState);
      if (onFavoriteToggle) {
        onFavoriteToggle(newFavoriteState);
      }
    };

  // Inline styles
  const styles = {
    card: {
      display: "block",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      border: "1px solid #f0f0f0",
      textDecoration: "none",
      color: "inherit",
      marginBottom: "16px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    cardHover: {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transform: "translateY(-2px)",
    },
    imageContainer: {
      width: "100%",
      height: "180px",
      overflow: "hidden",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    imageHover: {
      transform: "scale(1.05)",
    },
    favoriteButton: {
      position: "absolute",
      top: "12px",
      right: "12px",
      padding: "8px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "50%",
      backdropFilter: "blur(4px)",
      border: "none",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
    favoriteButtonHover: {
      transform: "scale(1.1)",
    },
    content: {
      padding: "16px",
    },
    title: {
      fontWeight: "bold",
      fontSize: "18px",
      color: "#1a1a1a",
      margin: "0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    details: {
      display: "flex",
      alignItems: "center",
      marginTop: "8px",
      fontSize: "14px",
      color: "#666666",
    },
    separator: {
      margin: "0 8px",
    },
    heartIcon: {
      fill: favorite ? "#ef4444" : "transparent",
      color: favorite ? "#ef4444" : "#cccccc",
    },
  };

  return React.createElement(
    Link,
    {
      to: `/recipe/${id}`,
      style: styles.card,
      onMouseEnter: (e) => {
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.querySelector('.meal-image').style.transform = styles.imageHover.transform;
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
        e.currentTarget.style.transform = 'none';
        e.currentTarget.querySelector('.meal-image').style.transform = 'none';
      },
    },
    React.createElement(
      "div",
      { style: styles.imageContainer },
      React.createElement("img", {
        src: image,
        alt: title,
        className: "meal-image",
        style: styles.image,
        loading: "lazy",
        onError: (e) => {
          e.target.src = "/placeholder.svg";
        },
      }),
      React.createElement(
        "button",
        {
          onClick: handleFavorite,
          style: styles.favoriteButton,
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = styles.favoriteButtonHover.transform;
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = 'none';
          },
          "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
        },
        React.createElement(Heart, {
          size: 20,
          style: styles.heartIcon,
        })
      )
    ),
    React.createElement(
      "div",
      { style: styles.content },
      React.createElement(
        "h3",
        { style: styles.title },
        title
      ),
      React.createElement(
        "div",
        { style: styles.details },
        React.createElement("span", null, `${calories} kcal`),
        React.createElement("span", { style: styles.separator }, "•"),
        React.createElement("span", null, `${time} min`)
      )
    )
  );
};

export default MealCard;