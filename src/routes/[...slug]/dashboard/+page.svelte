<script>
  export let data;
</script>

<body class="bg-gradient-to-r from-white to-cyan-200 min-h-screen">
  <div class="flex justify-center mx-auto">
    <div class="grid grid-cols-3 gap-4">
      {#each data.photos as photo}
        <form action="?/upload" method="POST">
          <button type="submit">
            <input
              type="hidden"
              name="url"
              value={photo.urls.regular}
              placeholder="Visible Field"
            />
            <input type="hidden" name="author" value={photo.user.name} />
            <input
              type="hidden"
              name="author_link"
              value={photo.user.links.self}
            />
            <input
              type="hidden"
              name="download_link"
              value={photo.links.download_location}
            />
            <img src={photo.urls.regular} class="h-80 rounded-lg" alt="" />
          </button>
        </form>
      {/each}
    </div>
  </div>
</body>
