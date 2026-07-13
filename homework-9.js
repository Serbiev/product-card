import { postComments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const byNumberFilter = numbers.filter(number => number >= 5);

console.log(byNumberFilter);


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


const commentsWithComEmail = postComments.filter(com => com.email.includes('.com'))
console.log(commentsWithComEmail)


const commentsUpdatedId = postComments.map(com => {
  return {
    ...com,
    postId: com.id <= 5 ? 2 : 1
  };
})
console.log(commentsUpdatedId)


const commentNames = postComments.map(com => {
  return {
    id: com.id,
    name: com.name
  };
});

console.log(commentNames);


const validatedComments = postComments.map(com => {
  return {
    ...com,
    isInvalid: com.body.length > 180
  };
});

console.log(validatedComments);


const byReduce = postComments.reduce((acc, com) => {
  acc.push(com.email);
  return acc;
}, []);

console.log(byReduce);


const byMap = postComments.map(com => com.email);
console.log(byMap);

console.log(byMap.toString());
console.log(byMap.join(', '));