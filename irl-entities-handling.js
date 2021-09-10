const _ = require('lodash');

const count = _.get(input, 'system_entities.number[0].value');
const flavor = _.get(input, 'custom_entities.flaveurpizza[0].value');

conversation.short_term_memory.count = count;
conversation.long_term_memory.flavor = flavor;

callback(output);
