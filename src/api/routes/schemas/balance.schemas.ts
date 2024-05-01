const getBalanceSchema = {
    type: 'object',
    required: ['value'],
    properties: {
        value: { type: 'number'},
    }
};

export { getBalanceSchema };