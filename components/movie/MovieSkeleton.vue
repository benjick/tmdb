<template>
  <div
    class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen"
  >
    <span class="skeleton-box image"></span>
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 100%;
  padding-top: 150%;
  position: relative;
}

.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 3s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
