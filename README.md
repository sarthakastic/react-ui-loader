
# react-ui-loader


Loader and Shimmer developed with customizable UI options to add different elemnets in each.

## Installation


``` 
npm install react-ui-loader
```
## Loader

### Props

| Prop Name      | DataType | Required       | Default Value    | Description                            |
|------------|-----------|---------------|-----------------------------|-----------|
| show      | boolean      | yes|true|Determines whether to hide or show loader
| bgColor      | string      | no | black | Takes hex values of color as input to determine background color of loading screen          |
| widthValue      | string or number      | no |100vw | Determines the width of loading screen 
| heightValue      | string or number      | no |100vh| Determines the height of loading screen 
| zIndexing | number | no|1|Determines the z-index for loading screen
| backgroundOpacity | number | no | 1 | Determines the opacity of background in Loader 
| justifycontent | string | no | center | Determines the horizontal position of loader icon, loader text and loader image according to flex properties
| alignitems | string | no | center | Determines the vertical position of loader icon, loader text and loader image according to flex properties
| loaderText | string | no | Loading... | Takes input as the text you want to display on loading screen
|textColor | string | no | white | Takes input as the color of the text you want to display on loading screen
| fontSizeValue | string | no | 18px | Takes input as the font size of the text you want to display on loading screen
| fontWeightValue | number | no | 400 |  Takes input as the font weight of the text you want to display on loading screen
| loaderColor | string | no | white | Takes string as input to determine the color of loader
|loader | boolean | no | false | Determines wheteher to show the loader or not
|loaderStyle | string | no | Circular | Determines the style of the loader
|loaderSize| string | no | medium | Determines the size of the loader
| textAnimate | boolean | no | false | Determines if we want to give an animation to the loading text
|children | ReactNode | no | null | Takes ReactNode as input to determine the logo in the loader
|logo| boolean | no | false |  Determines if we want to show the logo or not
|logoHeight | string | no | 48px |Determines the height of logo in loading screen 
|logoWidth | string | no | 48px |Determines the width of logo in loading screen 
| logoAnimate | boolean | no | false |  Determines if we want to give an animation to the logo
|row | boolean| no|true| Arrange loader icon, loader text and loader image in a row or column|

## Shimmer

### Props

| Prop Name      | DataType | Required       | Default Value    | Description                            |
|------------|-----------|---------------|-----------------------------|-----------|
| show      | boolean      | yes|true|Determines whether to hide or show shimmer
| profilePositionCenter      | boolean      | no | false | Determines if profile picture must be in center or not        |
| profileShape      | string       | no |circle | Determines the shape of profile picure
| coverHeight | string | no | 25% | Determines the height of cover picure
| showCover | boolean | no | true | Determines the whether to hide or display the cover picure
| showProfile | boolean | no | true | Determines the whether to hide or display the profile picure
|showLines |  boolean | no | true | Determines the whether to hide or display the lines
| numberOfLines | number | no | 10 | Determines the total number of lines to display
| numberOfCards | number | no | 10 | Determines the total number of Cards to display
|showCards|  boolean | no | true | Determines the whether to hide or display the cards
|cardHeight| string | no | 420px | Determines the height of cards
|cardWidth| string | no | 420px | Determines the width of cards
| backgroundColor| string |no| white | Determines the color of background
| color | string | no| gray | Determines the color of components
| shimmerColor | string | no| white | Determines the color of shimmer effect
