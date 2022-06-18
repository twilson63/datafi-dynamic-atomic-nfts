import Arweave from 'arweave'
import fs from 'fs'

const arweave = Arweave.init({
  port: 1984,
})

const jwk = JSON.parse(fs.readFileSync('wallet.json', 'utf-8'))
const addr = await arweave.wallets.jwkToAddress(jwk)
const src = fs.readFileSync('contract.js', 'utf-8')

// create contract Src
const cSrc = await arweave.createTransaction({ data: src })
cSrc.addTag('Content-Type', 'application/javascript')
cSrc.addTag('App-Name', 'SmartWeaveContractSource')
cSrc.addTag('App-Version', '0.3.0')
await arweave.transactions.sign(cSrc, jwk)
await arweave.transactions.post(cSrc)

// create contract
const winston = fs.readFileSync('../nft/dist/winston.svg', 'utf-8')

const contract = await arweave.createTransaction({ data: winston })
contract.addTag('Content-Type', 'image/svg+xml')
contract.addTag('Network', 'Koii') // Exchange to list NFT on Koii
contract.addTag('Action', 'marketplace/Create')
contract.addTag('App-Name', 'SmartWeaveContract')
contract.addTag('App-Version', '0.3.1')
contract.addTag('Contract-Src', cSrc.id)
contract.addTag('NSFW', 'false')
contract.addTag('Init-State', JSON.stringify({
  owner: addr,
  title: 'Winston',
  description: 'Winston the mascot of Arweave who never forgets!',
  name: 'Koii', // PST Name
  ticker: 'KOINFT', // PST you want to associate with NFT
  balances: {
    [addr]: 1
  },
  locked: [],
  contentType: 'text/svg+xml',
  createdAt: Date.now(),
  tags: [],
  isPrivate: false
}))

await arweave.transactions.sign(contract, jwk)
await arweave.transactions.post(contract)
console.log('ContractId: ', contract.id)
