<script>
  import "./style.css";
  export let data;
  console.log(data.htmlTextPara);
</script>

<div class="flex justify-center w-5/6 mx-auto min-h-screen font-fancy">
  <div>
    {@html data.htmlTextPara.htmltext};
  </div>
</div>
