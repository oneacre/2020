<template>
<footer class="footer">
  <h2>Credits</h2>
  <div class="footer-content">
    <div class="footer-credits">
      <slot />
    </div>
    <div class="footer-buttons">
      <a href="https://online.us14.list-manage.com/subscribe?u=9473977eedf1a7da237b22b89&id=85337ef85c"><button type="button" name="button">Newsletter</button></a>
      <a href="https://www.instagram.com/oneacre.online/"><button type="button" name="button">Instagram</button></a>
      <a href="https://twitter.com/oneacre_online"><button type="button" name="button">Twitter</button></a>
      <a href="https://www.facebook.com/oneacre.online"><button type="button" name="button">Facebook</button></a>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'BlockFooter',
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background: $pub-bg;
    border-top: 1px solid rgba($pub-color,0.1);
    padding: 3rem 2rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 4rem;
    @include respond-until($screen-md) {
        grid-template-columns: 1fr;
        grid-gap: 3rem;
        padding: 3rem 2rem 4rem;
    }

    h2 {
        font-size: 6rem;
        font-family: $font-nova;
        line-height: 1em;
        text-transform: lowercase;
        @include respond-until($screen-sm) {
            font-size: 5rem;
        }
        @include respond-until($screen-xs) {
            font-size: 4rem;
        }
    }

    &-content {
        width: 100%;
        display: grid;
        grid-gap: 4rem;
        font-size: 1.5rem;
        font-family: $font-univers;
        line-height: 1.375em;
        color: $pub-color;
        border-left: 1px solid;
        padding-left: 2rem;
        @include respond-until($screen-md) {
            border: 0;
            padding: 0;
        }
        @include respond-until($screen-xs) {
            font-size: 1.25rem;
        }
    }
    &-credits {
      max-width: 80ch;

        p {
            &:not(:last-of-type) {
                margin-bottom: 1em;
            }
            a {
                border-bottom: 1px solid;
            }
        }
    }

    &-buttons {
        display: grid;
        grid-template-columns: repeat(4,min-content);
        grid-gap: 1rem;
        @include respond-until($screen-sm) {
            grid-template-columns: repeat(2, 1fr);
        }
        button {
            width: 100%;
            appearance: none;
            border: 0;
            padding: 1rem 1.5rem 0.875rem;
            font-size: 1rem;
            font-family: $font-univers;
            line-height: 1em;
            text-transform: uppercase;
            color: $white;
            background: $black;
            letter-spacing: 2px;
            border-radius: 0.375rem;
            cursor: pointer;
        }
    }
}
</style>
