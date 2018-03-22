import delay from './delay';
import {apiUrl} from '../configuration/config'; 


// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
// const friends = [
//   {
//     id: "Augie-Chung",
//     name: "Augie Chung1",
//     categoryId: "friends"
//   },
//   {
//     id: "Barry-Fichtner",
//     name: "Barry Fichtner",
//     categoryId: "colleagues"
//   },
//   {
//     id: "Daniel-Brennan",
//     name: "Daniel Brennan",
//     categoryId: "family"
//   },  
// ];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (friend) => {
  return replaceAll(friend.name, ' ', '-');
};




class FriendApi {
  static getAllFriends() {
    return fetch(`${apiUrl}/friends`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
      // .then(response => {
      //   return response.json();
      // })
      // .then(jsondata => console.log(jsondata))
      // .catch(error => {
      //   alert(`Caught Error=${error}`);
      // })



    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Object.assign([], friends));
    //   }, delay);
    // });

  }

  static saveFriend(friend) {
    friend = Object.assign({}, friend); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minFriendNameLength = 1;
        if (friend.name.length < minFriendNameLength) {
          reject(`Name must be at least ${minFriendNameLength} characters.`);
        }

        if (friend.id) {
          const existingFriendIndex = friends.findIndex(a => a.id == friend.id);
          friends.splice(existingFriendIndex, 1, friend);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new friends in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          friend.id = generateId(friend);
          friends.push(friend);
        }

        resolve(friend);
      }, delay);
    });
  }

  static deleteFriend(friendId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfFriendToDelete = friends.findIndex(friend => {
          friend.id == friendId;
        });
        friends.splice(indexOfFriendToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default FriendApi;