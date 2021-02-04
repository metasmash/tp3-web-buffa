import _ from 'lodash'

export const removeElementFromArray = (array, index) => [
    ..._.slice(array, 0, index),
    ..._.slice(array, index + 1, _.size(array)),
]
