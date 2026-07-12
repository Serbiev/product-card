import { postComments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numberFilter = numbers.filter(number => number >= 5);

console.log(numberFilter);


const movies = [
  'Матрица',
  'Начало',
  'Интерстеллар',
  'Побег из Шоушенка',
  'Форрест Гамп',
  'Титаник'
];

console.log(movies.includes('Интерстеллар'))


function reverseArray(array) {
  return array.reverse()
}

console.log(reverseArray(numbers))
console.log(reverseArray(movies))


const outputComentCom = postComments.filter(com => com.email.includes('.com'))
console.log(outputComentCom)


const remappedComments = postComments.map(com => {
  return {
    ...com,
    postId: com.id <= 5 ? 2 : 1
  };
})
console.log(remappedComments)


const shortComments = postComments.map(com => {
  return {
    id: com.id,
    name: com.name
  };
});

console.log(shortComments);


const commentsWithFlag = postComments.map(com => {
  return {
    ...com,
    isInvalid: com.body.length > 180
  };
});

console.log(commentsWithFlag);


const emailsReduce = postComments.reduce((acc, com) => {
  acc.push(com.email);
  return acc;
}, []);

console.log(emailsReduce);

const emailsMap = postComments.map(com => com.email);
console.log(emailsMap);

console.log(emailsMap.toString());
console.log(emailsMap.join(', '));