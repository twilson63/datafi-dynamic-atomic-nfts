<script>
  import Arweave from "arweave";

  const arweave = Arweave.init({});
</script>

<svelte:head>
  <title>Winston Dynamic NFT</title>
  <script
    src="https://unpkg.com/warp-contracts@1.1.2/bundles/web.bundle.js"></script>
</svelte:head>
<div>Number of unique visits: 0</div>
<img src="winston.svg" alt="winston" />

<style>
  div {
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
