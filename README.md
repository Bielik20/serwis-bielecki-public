# Serwis Bielecki Public

## Generate blur placeholders

1. Set `Image` to use blur:

```tsx
<Image src={image} placeholder='blur' />
```

2. Remove `images` and `output` options from `next.config.js`.
3. Run app on localhost.
4. In network tab find and download blur version.
5. Convert blur version to data URI.
6. Paste it in place of blur:

```tsx
<Image src={image} placeholder='data:image/...' />
```

7. Revert step 2.


## To compress images

https://compressor.io/

## To generate images

https://firefly.adobe.com/inspire/images
