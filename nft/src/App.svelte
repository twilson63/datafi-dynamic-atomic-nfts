<script>
  import Arweave from "arweave";
  import { onMount } from "svelte";

  const arweave = Arweave.init({});
  const CONTRACT = window.location.pathname.replace(/\//g, "");

  const contract = warp.WarpWebFactory.memCachedBased(arweave)
    .useArweaveGateway()
    .build()
    .contract(CONTRACT);

  function visits() {
    return contract.viewState({ function: "visits" }).then((res) => res.result);
  }

  async function doVisit() {
    if (!sessionStorage.getItem("addr")) {
      let wallet = await arweave.wallets.generate();
      const addr = await arweave.wallets.jwkToAddress(wallet);
      sessionStorage.setItem("addr", addr);
      await arweave.api.get(`mint/${addr}/${arweave.ar.arToWinston("100")}`);
      await contract.connect(wallet).writeInteraction({
        function: "visit",
      });
      await arweave.api.get("mine");
      total = visits();
    }
  }

  onMount(doVisit);

  let total = visits();
</script>

<svelte:head>
  <title>Winston Dynamic NFT</title>
</svelte:head>
<div>
  {#await total}
    Loading...
  {:then visits}
    Number of unique visits: {visits}
  {/await}
</div>
<img src="winston.svg" alt="winston" />

<style>
  div {
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
