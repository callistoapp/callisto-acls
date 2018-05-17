import queries from './queries'
import mutations from './mutations'
import schema from './schema'

const graphql = {
    schema,
    root: Object.assign({}, queries, mutations)
}

export default graphql



