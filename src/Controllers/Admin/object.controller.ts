export const getObjects = (_req, res) => {
    res.status(200).json({
        objects: [
            {id: 1, name: 'object_1'},
            {id: 2, name: 'object_2'}
        ]
    })
};