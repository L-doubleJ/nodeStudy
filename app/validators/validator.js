const { LinValidator } = require('../../core/lin-validator');
class PositiveIntegerValidator extends LinValidator {
    constructor() {
        this.id = [new Rule('isInt', '需要正整数', { min: 1 })];
    }
}

module.exports = { PositiveIntegerValidator };
