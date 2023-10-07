<script>
  let currentSlide = 0;

  const urls = [
    "https://images.unsplash.com/photo-1695779539366-b221da6b9fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3433&q=80",
    "https://images.unsplash.com/photo-1695783609254-77bd5cd68b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3433&q=80",
    "https://images.unsplash.com/photo-1696266530362-5d5227c35832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3042&q=80",
  ];

  function nextSlide() {
    if (currentSlide === urls.length - 1) {
      currentSlide = 0;
      return;
    }
    currentSlide = currentSlide + 1;
  }

  function previousSlide() {
    if (currentSlide === 0) {
      currentSlide = urls.length - 1;
      return;
    }
    currentSlide = currentSlide - 1;
  }
</script>

<div class="carousel-container">
  <div class="slides-container">
    {#each urls as url, i}
      <img
        style={`translate: ${-100 * currentSlide}%`}
        src={url}
        alt={`Slide ${i}`}
      />
    {/each}
  </div>
  <h1>Current slide: {currentSlide}</h1>
  <button style="left: 0" on:click={previousSlide}>
    <div>
      <img alt="Go Previous" src="/left_icon.svg" />
    </div>
  </button>
  <button style="right: 0" on:click={nextSlide}>
    <div>
      <img alt="Go Next" src="/right_icon.svg" />
    </div>
  </button>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .carousel-container {
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
  }

  .slides-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .slides-container img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 0;
    transition: translate 0.5s ease-in-out;
  }

  .carousel-container button {
    position: absolute;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
      background: rgb(0, 0, 0, 0.5);
    }
  }

  .carousel-container button > div {
    padding: 0.25rem;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
