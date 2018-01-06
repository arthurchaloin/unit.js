const pipeline = require('./src/pipeline');
const result = require('./src/result');
const run = require('./src/run');

const binary = pipeline.binary;
const reference = pipeline.reference;
const template = pipeline.template;
const test = pipeline.test;
const cmd = pipeline.cmd;
const success = result.success;
const failure = result.failure;

module.exports = {
  binary,
  reference,
	template,
  test,
  cmd,
  success,
  failure,
  run
};