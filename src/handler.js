'use strict';

const checker = require('./isogram');

module.exports.isIsogramHandler = (event) => {
  const word = event.queryStringParameters.word;
  const isIsogram = checker.isIsogram(word);

  return {
    statusCode: 200,
    body: JSON.stringify({ isIsogram }),
  };
};
