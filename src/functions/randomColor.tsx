const colors = [
  "bg-[#FAB77A]",
  "bg-[#FE9C75]",
  "bg-[#00D4FA]",
  "bg-[#E4EE96]",
  "bg-[#B693F8]", 
  "bg-[#8dc4c2]", 
  "bg-[#fdefc4]", 
  "bg-[#657ae4]", 
  "bg-[#00dabf]", 
  "bg-[#d7defa]", 
  "bg-[#ffe856]", 
  "bg-[#ff6a91]", 
  "bg-[#00dabf]", 
  "bg-[#ffebba]", 
  "bg-[#7ea2ee]", 
  "bg-[#f6769c]", 
  "bg-[#ffa900]", 
  "bg-[#ffa900]", 
  "bg-[#f75778]", 
  "bg-[#ffc54d]", 
  "bg-[#657ae4]", 
  "bg-[#7eced6]", 
  "bg-[#0087fd]", 
  "bg-[#d6d6d6]", 
  "bg-[#ffa3b6]", 
  "bg-[#ffffff]", 
];

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
