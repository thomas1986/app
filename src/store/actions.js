/**
 * 全局action处理
 */

import * as types from './mutationTypes'

export const resetStore = ({ commit }) => {
    commit(types.RESET_STATE)
}
