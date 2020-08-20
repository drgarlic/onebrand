import fetch from 'node-fetch'

export default async (req, res) => {
    let data = await fetch('https://api.airtable.com/v0/appjZ7KSO2xCNMJak/Table%201?api_key=key0GBsyIKRynkygI')
    data = await data.json()
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
    res.status(200).json(data)
}
