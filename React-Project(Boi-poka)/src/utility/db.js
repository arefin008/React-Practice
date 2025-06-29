import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exists,do no add it
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    // ideally trigger toast from the component
    toast("Books added to your read list.");
  }
};

// wish-list
// const getStoredWishList = () => {
//   const storedListStr = localStorage.getItem("wish-list");
//   if (storedListStr) {
//     const storedList = JSON.parse(storedListStr);
//     return storedList;
//   } else {
//     return [];
//   }
// };

// const addToStoredWishList = (id) => {
//   const storedList = getStoredWishList();
//   if (storedList.includes(id)) {
//     //already exists,do no add it
//     console.log(id, "already exists");
//   } else {
//     storedList.push(id);
//     const storedListStr = JSON.stringify(storedList);
//     localStorage.setItem("wish-list", storedListStr);
//     // ideally trigger toast from the component
//     toast("Books added to your wish list.");
//   }
// };

export { addToStoredReadList, getStoredReadList };
