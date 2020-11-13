<img alt="fTip logo" src="https://github.com/faesslich/fTip/blob/master/demo/fTip-logo.png?raw=true" width="181" />

## fTip - dependency free vanilla js tooltip

#### Quick facts:
- 100% free and open source (personal/commercial)
- only 1.2kb gzipped
- available via CDN: https://cdn.jsdelivr.net/gh/faesslich/fTip/dist/

<p><br></p>

## Basic usage:

#### HTML:
```html
<span data-tooltip='Lorem ipsum dolor sit amet'>Tooltip trigger</span>
```

#### JS static include:
```html
<script src="dist/js/fTip.min.js"></script>
<script>
    new fTip();
</script>
```


## Advanced usage:
#### HTML (with data-attributes):
```html
<span 
    data-tooltip='[[ someClassOfElement ]]'
    data-position="left top"
    data-width="300"
    data-bg="#eee"
    data-color="#222"
>
    Tooltip trigger
</span>
```

<p><br></p>


## JavaScript Initialise options
``` javascript
{
  delay: 150,
  distance: 15
}
```

| Key | Type | Default  | Description |
| --- | ---- | -------  | ----------- |
| `delay`    | (number)	| `150` | _Time to wait until tooltip is rendered._ |
| `distance` | (number) | `15`  | _Optical distance from trigger._ |


## Data-Attribute options
``` html
<span 
    data-tooltip='[[ someClassOfElement ]]'
    data-position="left top"
    data-width="300"
    data-bg="#eee"
    data-color="#222"
>
```

| Key | Type | Default  | Description |
| --- | ---- | -------  | ----------- |
| `data-tooltip`    | (string or DOM node)	| ` ` | _Content of the tooltip. Just text, HTML, or a DOM selector to get the content from._ |
| `data-position` | (number) | `center top`  | _Positions based on trigger spaced with a empty space.<br>Horizontal: `left`, `center`, `right`,<br>Vertical: `top`, `center`, `bottom`_ |
| `data-width` | (number) | `inherit`  | _Set the maximum width in pixels._ |
| `data-bg` | (string) | ` `  | _Set a specific background-color for the tooltip. HEX, HLS, RGB and RGBA are allowed._ |
| `data-color` | (string) | ` `  | _Set a specific text-color for the tooltip. HEX, HLS, RGB and RGBA are allowed._ |

> ### A few examples available in the [DEMO](https://github.com/faesslich/fTip/blob/master/demo/index.html).


<p><br></p>

## Browser support
- Chrome >= 41
- Firefox >= 48
- Opera >= 28
- Safari >= 9.1
- Edge >= 12
- iOS Safari >= 9.1

