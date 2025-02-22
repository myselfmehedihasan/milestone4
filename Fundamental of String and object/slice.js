const address = 'anderKilla';
const part = address.slice(2,5)

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' '));
console.log(sentence.split('a'));
const friendsStr = 'Rahim,kahim,shalim,lamim.malim,dalim';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = ['Rahim', 'kahim', 'shalim', 'lamim.malim', 'dalim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));