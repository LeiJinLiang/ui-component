/**
 * Created by leijin on 2017/7/16.
 */
module.exports = {
    path : 'list',
    getComponent(nextState,cb) {
        require.ensure([],(require)=> {
            cb(null, require('../List/components/List'))
        })
    }
}