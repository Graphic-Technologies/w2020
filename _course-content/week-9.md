---
layout: course-content
title: Photo Manipulation &amp; Composition
week: 9
active: true
intro: |-
  This week we will look at how we can combine and manipulate images to create interesting photo composites.
graphic: psd
files:
  - title: w9-playground-photo-manipulation.zip
    link: https://drive.google.com/uc?export=download&id=1GbhSjtr2Xcd04uYC-9zqTDUc-lRYABCx
    size: 246mb
todos:
  tasks:
    - Complete Photo Composite exercise
    - Complete first draft of Profile Card assignment
    - Post your draft to the Profile Card Feedback dicussion
    - Review week 10 content
  # videos:
  #   - id: Xk200TIb6TA
  #     type: youtube
  #   - id: Xk200TIb6TA
  #     type: youtube
  #   - id: Xk200TIb6TA
  #     type: youtube
---

## Introduction

Before we dive into how we make our photo manipulations and composites, let's take some time to consider **layout and composition** fundamentals. It is incredibly important to properly consider and plan how are images will be laid out in order to create an effective design.

{% include snippets/video.liquid id="a5KYlHNKQB8" %}

<!-- ## Non-Destructive Image Editing

We have previously discussed the basics of non-destructive editing. When creating composites, our Photoshop files will get more complex so insuring your edits are non-destructive becomes even more important. -->

## Types of Layers

There are a number of different layer types in Photoshop. The different layer types can be differentiated by the preview and icon that is shown beside the layer name in the `Layers` panel.

![Layer types]({{site.baseurl}}/images/course-content/week-9/different-types-of-layers.png)

<ol>
  <li><strong>Type Layer</strong><p>
    Used to display text. Text boxes can be either Point Type or Area Type boxes 
  </p></li>
  <li><strong>Image Layer</strong><p>
    A basic layer that displays image content. This type of layer can be edited directly with numerous tools (for example: the paintbrush). Resizing this type of layer will result in permanent change to size and quality of layer.
  </p></li>
  <li><strong>Vector Shape Layer</strong><p>
    Features vector shapes that are created directly in Photoshop with the Pen, Rectangle, Ellipse, etc. tools. Shapes on this layer are vector and can be edited and resized without loss to layer quality.
  </p></li>
  <li><strong>Layer Styles</strong><p>
    Layer styles are effects and adjustments that are applied directly to a single layer or group.
  </p></li>
  <li><strong>Smart Object</strong><p>
    A smart object is a layer that is protected from direct editing. Any effect, filter, or resizing done to this layer is non-destructive. The contents of the layer can be edited directly by opening the layer contents in a separate window.
  </p></li>
  <li><strong>Smart Filter</strong><p>
    A filter applied to a Smart Object that is non-destructive and can be updated after initial application.
  </p></li>
  <li><strong>Layer Mask</strong><p>
    A non-destructive method to show and hide certain portions of a layer. Can be applied to <strong>any</strong> layer type. Areas of the layer mask that are white will be visible, areas that are black will be fully transparent, and areas that are grey will be semi-transparent based on how dark the grey is.
  </p></li>
  <li><strong>Adjustment Layer</strong><p>
    Applies an adjustment or effect to all layers below it in the Layers panel. Adjustments include color adjustments, brightness &amp; contrast, saturation and more.
  </p></li>
  <li><strong>Background</strong><p>
    A default layer included in new Photoshop projects. Generally not required and can be deleted.
  </p></li>
</ol>

## Layer Styles

Layer effects and styles cover how a layer style is one or more effects applied to a layer or layer group. They change the appearance of a layer’s contents in a non-destructive way.

The video below walks us through how to use layer styles, the different types of layer styles, how to remove, copy, and add them.

{% include snippets/video.liquid id="gZZKYc7l2YA" %}

### Optional Practice

Practice more with How to Create a Glowing NEON Sign Text Effect Using Layer Styles video.

{% include snippets/video.liquid id="lrXTg7MzVyk" %}

## Adjustment Layers

Adjustment layer lets you apply colour and tonal adjustments to your image without permanently changing pixel values.

This video explains what Photoshop adjustment layers are and the best way to work with them. Adjustment layers allow you to change the hue and situation, contrast, colour grading and the tone curve in Photoshop. You can use the adjustment layer mask to help with more refined photoshop editing techniques.

{% include snippets/video.liquid id="RPn5fTWCZnU" %}

## Smart Filters

The first video will teach us to apply creative filters using the Filter Gallery. The edit is applied permanently to the image.

Browse the Filter Gallery
Blur an image with Smart Filters
Apply Smart Filters let you add filter to a Smart Object layer. Smart Filters appear in the Layers panel below the Smart Object layer applied. You can adjust, remove, or hide Smart Filters, so they are nondestructive editing. Follow along the 2nd video to Blur an image with Smart Filters.

[![Adobe tutorial for Smart Filters]({{site.baseurl}}/images/course-content/week-9/smart-filters.png)](https://helpx.adobe.com/photoshop/how-to/applying-filters-basics.html#blur_an_image_with_smart_filters)

## Blend Modes

Layer blend modes enable the colors and tones on one layer to interact with those on the layer below. We will follow this video to put everything together by combining images and applying blend modes to create an interssting composite.

[![Adobe tutorial for Smart Filters]({{site.baseurl}}/images/course-content/week-9/composite-w-blending.png)](https://helpx.adobe.com/photoshop/how-to/composite-image-with-blend-modes.html)

## Exercise Inspiration

We can {% include snippets/link-external.liquid link="https://helpx.adobe.com/photoshop/how-to/create-composite-with-layer-mask.html" text="build a composite with layer masks" %} and go even further to {% include snippets/link-external.liquid link="https://helpx.adobe.com/photoshop/how-to/match-color-tones-composite.html" text="match color in a composite" %}.

Get inspired by this 1-min video tutorial: {% include snippets/link-external.liquid link="https://create.adobe.com/2019/7/16/how_to_make_a_photo_.html" text="How to make a photo composite" %}
