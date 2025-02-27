export const getCompanies = (_req, res) => {
    res.status(200).json({
        companies: [
            {id: 1, name: 'company_1'},
            {id: 2, name: 'company_2'}
        ]
    })
};