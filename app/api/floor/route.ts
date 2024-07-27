// floor route.ts

export async function POST(
    request: Request
) {
    const { tokenAddress } = await request.json()
    const url = `https://api.simplehash.com/api/v0/nfts/solana/${tokenAddress}/0`;
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY ?? "" },
    };

    try {
        // console.log(`Retrieving Floor Price: ${url}`);
        const response = await fetch(url, options)
            .then(res => res.json())
        // console.log(response)
        const floorPriceInSol = response.collection.floor_prices[0].value / 1_000_000_000;
        const usdValue = response.collection.floor_prices[0].value_usd_cents / 100
        return Response.json({ floorPrice: floorPriceInSol, usdValue, uiFormmatted: `${floorPriceInSol.toFixed(4)} Sol ($${usdValue.toFixed(2)})` });
    } catch (error: any) {
        console.error(`Error fetching NFT Collection data: ${error}`);
        return Response.json({ error: 'failed to load data' })
    }
}
