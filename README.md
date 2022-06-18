# Atomic NFTs (Dynamic)

Dynamic Atomic NFTs are powerful mechanisms that connect together three Arweave technologies, SmartWeave contracts, Atomic NFTs and the Permaweb.

``` 
SmartWeaveContract(
  PermawebApp(
    Digital Asset
  )
)
```

Dynamic NFTs are SmartWeave Contracts wrapped around a Permaweb App that wraps a digital asset, this capability allows for many interesting use cases. One use case is the ability for the NFT itself to actually capture attention and work with L2 blockchains like `KOII` to provide rewards for that attention. In this workshop, we will continue our journey with DataFi and explore dynamic Atomic NFTs.

## About Workshop

### What do I need to know to get the most out of this workshop?

* Understanding the concept of Blockchains - https://youtu.be/yubzJw0uiE4
* Understanding the concept of NFTs - https://youtu.be/NNQLJcJEzv0
* Fullstack Developer skills (HTML, CSS, and Javascript)
* Arweave Concepts (Data Storage and Smartweave Contracts) - https://arweave.org

### What developer tools will be using?

* Code Editor https://code.visualstudio.com
* NodeJS (v16.15.1) https://nodejs.org
* git https://git-scm.org
* ArLocal (v1.1.41) https://github.com/textury/arlocal

> IF you want to use mainnet: You will also need a couple of Arweave Wallets and a little AR to make some transactions, you can get a wallet at https://arweave.app or https://arconnect.io and you can find the best exchanges to acquire AR via this article - https://arweave.news/how-to-buy-arweave-token/

---

## DataFi

To better understand the capabilities of DataFi, I think it will be best to unpack each of the underlining concepts with references to explore them deeper. Then walk through a proof of concept via code that can demonstrate the combination of these concepts in a simple project. Finally, share some use cases that demonstrate DataFi in the wild. Buckle up this should be a fun ride. 🚀

* Trustless
* Permissionless
* Composable

DataFi Workshop is a multipart series of concepts grouped under the idea of dataFi, where permanent **data** meets decentralized **fi**nalization. Arweave contains many core concepts that can bundle together to create exciting features and functionality unique to the Arweave ecosystem. 

Permanent **Data** + Decentralized **Fi**nalization = **DataFi**

![DataFi](https://fedzrgwlefkoztvkbdve3hkqeimokiowci6gyf63ojd3tfxcpi.arweave.net/KQeYmsshVOzOqgjqTZ1QIhjlIdYSPGwX23J_HuZbiek)


## Atomic NFTs (Dynamic) Workshop

The NFT concept is about showing and transfering ownership of an item, to show ownership you have a token that shows the owner of a specific key pair (public/private) keys owns a specific (Digital) asset. 

> It is possible for an NFT to point to a physical asset as well, but for the purposes of this workshop we will be dealing with NFTs that show ownership of a digital asset.

That digital asset needs to be available for reference at all times. Arweave is a great storage choice for digital assets, because you pay once to store and it is available through a decentrailized network forever. Many NFT developers may store the NFT or Token on blockchain then store the data on a storage layer, which separates the token from the digital asset into two platforms. With Arweave Smart Contracts you can store both the NFT (Token) and the Digital Asset on the same blockchain(blockweave). This allows you to keep both the token and the digital asset combined together.

### What is an Atomic NFT?

> NOTE: As of June 10, 2022 we are using the Atomic NFT standard defined at https://atomicnft.com - This standard may change in the future! 

Atomic NFT is a standard where the media assets and the contract metadata are stored together immutably under a single unique identifier. -- https://atomicnft.com/en/General-definition-of-an-atomic-NFT/

In order to provide a single identifier as the point of entry for both the NFT and asset, we will use the process we demoed in the last workshop. The ability to add a NFT SmartWeave Contract and Digital Asset as the data in a single transaction provides us the ability to have a single transaction id point to both the NFT and the digital asset.

![Atomic NFT](https://arweave.net/_3iet3wjKfJPsM4QTRZnLYGrfe77jRJKraLzfJVCLSs)

Find out more in a previous workshop: https://youtu.be/qu6SEjYrMA0

## Workshop Project Dynamic Atomic NFT

Lets build a simple attention tracking Atomic NFT, if a user visits the NFT we can generate JWK, if it is there first time, then store that JWK in their localStorage, and use it create a visit interaction for the Atomic NFT contract, then we will increment the counter to track the number of unique visits. When we deploy to the permaweb, we will be able to capture attention using our Warp Contract and display the results.

---

## Getting Started

### Clone Repo

```
git clone https://github.com/twilson63/datafi-dynamic-atomic-nfts
cd datafi-dyanmic-atomic-nfts
```

### Install and start arlocal

> arlocal is a single executable that simulates the Arweave gateway and node on your local workstation. It will allow us to mint our dynamic NFT without have to use AR

In a separate terminal window start arlocal (devnet)

``` sh
npm install -g arlocal@1.1.41
arlocal
```

### Levelset

In this project we have two folders: `nft` and `warp`

The `nft` folder contains a svelte app that compiles down to a single html file and holds our digital asset.
The `warp` file contains our scripts to mint our Atomic NFT.

Currently the project is configured to mint just the `svg` file that is located in the `nft/dist` folder.

---

### Modify `mint.js` to mint the html file 

warp/mint.js

``` js

```

---

### Modify the `contract.js` to add visits feature

warp/contract.js

``` js

```

---

### Modify the `App.svelte` to capture visits

nft/src/App.svelte

``` js


```

--- 

### Adjust for mainnet

warp/mint-prod.js

nft/src/App-prod.svelte


---

### Summary

