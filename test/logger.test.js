const config = require('../config');
const logger = require('../logger');

test("info is defined", () => {
    expect(logger.info).toBeDefined();
});