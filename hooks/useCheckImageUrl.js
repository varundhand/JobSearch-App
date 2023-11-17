export const useCheckImageURL = (url) => {
    if (!url) return false;
  
    // Improved regex pattern for image URLs
    const pattern = new RegExp(/^https?:\/\/.+\/.+$/)
    
    return pattern.test(url);
  };