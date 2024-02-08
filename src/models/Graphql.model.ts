export interface GraphqlModel<ModelType> {
    [key: string]: {
        edges: {
            node: ModelType
        }[]
    }
}