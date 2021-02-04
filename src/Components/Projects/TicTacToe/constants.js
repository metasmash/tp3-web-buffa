import _ from 'lodash'

const zeros = _.constant(0)
const numberOfValue = 9
export const initialState = _.times(numberOfValue, zeros)
