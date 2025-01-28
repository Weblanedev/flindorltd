export const getTagClass = (tag: string) => {
    switch (tag) {
      case "New":
        return "new";
      case "Discounted": 
        return "discount";
      case "Trending":
        return "trending";
      case "Featured":
        return "featured";
      case "Popular":
        return "most-popular";
      default: 
        return ""; 
    }
  };
export const getColorClass = (color: string) => {
    switch (color) {
      case "pink":
        return "cl-pink";
      case "light-white":
        return "cl-light-white";
        case "black":
          return "cl-black";
        case "navy":
          return "cl-navy";
        case "brown":
          return "cl-brown";
        case "ash":
          return "cl-ash";
        case "yellow":
          return "cl-yellow";
        case "orange":
          return "cl-orange";
        case "wood":
          return "cl-wood";
        case "blue":
          return "cl-blue";
        case "green":
          return "cl-green";
        case "gold":
          return "cl-gold";
        case "silver":
          return "cl-silver";
      default: 
        return ""; 
    }
  };