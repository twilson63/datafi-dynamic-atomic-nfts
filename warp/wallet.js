import Arweave from 'arweave'
import fs from 'fs'

const arweave = Arweave.init({
  port: 1984
})

const jwk = await arweave.wallets.generate()
const addr = await arweave.wallets.jwkToAddress(jwk)
fs.writeFileSync('wallet.json', JSON.stringify(jwk))

await arweave.api.get(`mint/${addr}/${arweave.ar.arToWinston('100')}`)