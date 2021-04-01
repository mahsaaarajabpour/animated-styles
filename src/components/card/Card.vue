<template lang="pug">
  div.center
    div.property-card
      div.property-image
          div.property-image-title
      div.property-description
        h5 card title
        p this is description of my card.
        div.property-social-icons

</template>

<script>
export default {
  name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h5
    margin: 0
    font-size: 1.4em
    font-weight: 700
  p
    font-size: 12px

  .center
    height: 100vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center


  .property-card
    height: 18em
    width: 14em
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    position: relative
    overflow: hidden
    border-radius: 16px
    box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff

    //-webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
    //-o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
    //transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
    //-webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff
    &:hover .property-description
      height: 0
      padding: 0 1em
    &:hover .property-image
      height: 18em
    &:hover .property-social-icons
      background-color: white

    .property-image
      height: 95px
      width: 224px
      //padding: 1em 2em
      position: absolute
      top: 0

      background-image: url('~@/assets/image/1.jpg')
      background-size: cover
      background-repeat: no-repeat
      transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //-webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //-o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)

    .property-description
      $description-color: #FAFAFC
      background-color: $description-color
      width: 224px
      height: 192px
      position: absolute
      bottom: 0
      //-webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //-o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //padding: 0.5em 1em
      //padding-top: 2em
      text-align: center

    .property-social-icons
      width: 12px
      height: 12px
      background-color: black
      position: absolute
      bottom: 12px
      left: 12px
      //-webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //-o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)
      //transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)

</style>
