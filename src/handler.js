'use strict';

const checker = require('./isogram');

module.exports.isIsogramHandler = async (event) => {
  // validate user input
  if (!event.queryStringParameters || !event.queryStringParameters.word) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing word parameter' }),
    };
  }

  const word = event.queryStringParameters.word;
  const isIsogram = checker.isIsogram(word);

  return {
    statusCode: 200,
    body: JSON.stringify({ isIsogram }),
  };
};
