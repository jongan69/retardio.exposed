// route.ts

export async function POST(
    request: Request
) {
    const { outputMint } = await request.json()
    const usdAmount = 1
    const url = `https://quote-api.jup.ag/v6/quote?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=${outputMint}&amount=${usdAmount}&slippageBps=0`;

    try {
        console.log(`Retrieving Amount of $1 USDC Wroth of: ${outputMint}`);
        const response = await fetch(url)
            .then(res => res.json())
        console.log(response)
        const amountOut = response.outAmount;
        const usdValue = usdAmount / amountOut
        return Response.json({ usdValue, uiFormmatted: `$${usdValue.toFixed(2)}`});
    } catch (error: any) {
        console.error(`Error fetching NFT Collection data: ${error}`);
        return Response.json({ error: 'failed to load data' })
    }
}
