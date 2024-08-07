# Serwis Bielecki Public

Link: https://bielik20.github.io/serwis-bielecki-public/

Workflow to deploy to GitHub Pages: https://github.com/Bielik20/serwis-bielecki-public/actions/workflows/pages.yml

To test website: https://pagespeed.web.dev/

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

## To convert images to webp

Use [Magick](https://imagemagick.org/script/command-line-processing.php)

## To compress images

https://compressor.io/

## To generate images

https://firefly.adobe.com/inspire/images
