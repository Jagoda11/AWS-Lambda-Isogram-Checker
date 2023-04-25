'use strict';

const checker = require('../isogram');

module.exports.handler = (event, context, callback) => {
  const word = event.queryStringParameters.word;
  const isIsogram = checker.isIsogram(word);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ isIsogram }),
  });
};
