---
layout: course-content
title: Typography, Appearance, &amp; Exporting
week: 5
active: true
intro: |-
  This week we will look at different the typography tools, advanced styling with the Appearance panel, and how to export our completed artwork.
graphic: ai
files:
  - title: w5-playground-typography.zip
    link: https://drive.google.com/uc?export=download&id=1mdDizV8gdjXNZDiHo1akAPKbxpeUPd6Y
    size: 1mb
todos:
  tasks:
    - Complete Character Vectorization exercise
    - Continue working on Avatar Icon
    - Post to the Avatar Icon Feedback discussion board
  # videos:
  #   - id: Xk200TIb6TA
  #     type: youtube
  #   - id: Xk200TIb6TA
  #     type: youtube
  #   - id: Xk200TIb6TA
  #     type: youtube
---

## Introduction

In this module, you will be learning how to add properly styled text to your designs, apply effects to that text and other objects, how to properly export your artwork properly for the web to multiple sizes and file types all at once.

## Basics of Typography

{% include snippets/video.liquid id="sByzHoiYFX0" %}

Typography is the arrangement of type to reflect a particular style and appearance. Take a look at this series of short tutorials and practice [adding text to your designs](https://helpx.adobe.com/ca/illustrator/how-to/text-basics.html).

- Add a line of text
- Add paragraphs of text
- Format text
- Place text on or inside a path
- Re-shape text

### Font Classifications

The two most common types of font classifications are Serif and Sans-serif. A serif is the small line or stroke at the end of characters in some type faces. Other common classifications you may run into include script (or cursive in CSS), slab serif, mono, and decorative, however there are many other classifications.

<div class="highlight-box">
  <span class="scale-1" style="font-family: serif;">Serif</span>
  <span style="font-family: serif;"> Ex: Georgia, Times New Roman</span>
  
  <span class="scale-1" style="font-family: sans-serif;">Sans Serif</span>
  <span style="font-family: sans-serif;"> Ex: Arial, Helvetica</span>

The font used on this site is called {% include snippets/link-external.liquid link="https://fonts.google.com/specimen/Poppins" text="Poppins" %}, which is a **sans-serif** font.

</div>

### Sourcing Fonts

Picking and sourcing fonts can be challenging. In order to pick the right font for your project or client, you must first spend some time considering the message you are trying to convey and the character of the project/client. A simple place to start is to take the name of your project/client and write it out in a wide range of font families of different classifications and styles and start narrowing down the options.

#### Recommended Font Sites

- [Adobe Fonts](https://fonts.adobe.com) - large collection of premium fonts that are included in your subscription. Can be used effectively for both print and web.
- [Google Fonts](https://fonts.google.com) - large collection of well made free fonts. Great for use on the web and for clients with small budgets.

<div class="highlight-box">
#### Careful of Free Font Websites!
There are a lot of websites that give away free fonts, however you need to be careful with the fonts you find online. Often, they are community made fonts that will have issues such as lacking all the proper characters needed for the web, or are just poorly designed and hard to read. Some sites also provide free downloads for fonts that they do not have the legal right to provide, which could land you in trouble in the future if you use that font for a real job/client.

In general, I would suggest sticking with the above font site suggestions!

</div>

## Type Tools

### Character Panel

The character panel is used to format the styles of characters of your type. Here you can pick your fonts, weight, style, size, and numerous other settings.

![Character panel]({{site.baseurl}}/images/course-content/week-5/panel-character-styles.jpg)

1. **Font Family** - A group of fonts containing varying weight and styles options of the same design.
2. **Font Weight/Style** - The weight and style options within a single font family.
3. **Font Size** - The size of the characters.
4. **Leading** - The space between lines of type. Measured from the bottom of one line of characters to the bottom of the next line of characters.
5. **Kerning** - Modify spacing between specific characters.
6. **Tracking** - Modify spacing between all characters.
7. **Vertical Scaling** - Vertically stretches type. DO NOT STRETCH TYPE. Stretching type is considered bad typography. You should always see 100% here.
8. **Horizontal Scaling** - Horizontal stretches type. DO NOT STRETCH TYPE. Stretching type is considered bad typography. You should always see 100% here.
9. **Baseline Shift** - Shifts the baseline (the invisible line which type sits on) up or down.
10. **Character Rotation** - Rotates characters within the text box.
11. **Character Options** - Allows you to apply styling options such as All Caps, Small Caps, Superscript, Subscript, Underline, and Strikethrough

### Paragraph Panel

The paragraph panel is used to format styles that affect a group of text, or a paragraph. Paragraph styles include text alignment, indentation, spacing before and after, and hyphenation.

Different paragraphs within the same text box can have different paragraph styles, however they must be divided by new line or a hard return. Characters within the same paragraph all share the same paragraph styles.

![Paragraph panel]({{site.baseurl}}/images/course-content/week-5/panel-paragraph-styles.jpg)

1. **Text Alignment** - Text alignment options including align left, align center, align right, justify left, justify center, justify right, and full justify.
2. **Left Indent** - Control how much indent is on the left hand side of text.
3. **Right Indent** - Control how much indent is on the right hand side of text.
4. **First-Line Left Indent** - Control how much indent is on only the first line of the left hand side of text.
5. **Space Before** - Controls how much space is made before the paragraph separating it from the previous paragraph in the same text box.
6. **Space After** - Controls how much space is made after the paragraph separating it from the next paragraph in the same text box.
7. **Hyphenation** - Turns on or off automatic word hyphenation. Word hyphenation is used to balance the length of lines in a paragraph and spacing between words. Hyphenation is generally not used on the web so you should have this unchecked.

## Appearance panel

The Appearance panel gives us more direct control over the styling of our shapes and type. It allows us to apply and layer multiple strokes, fills, and effects to make more interesting designs.

![Appearance panel]({{site.baseurl}}/images/course-content/week-5/appearance-panel.png)

- **A.** Path with stroke, fill, and drop shadow effect
- **B.** Path with effect
- **C.** Add New Stroke button
- **D.** Add New Fill button
- **E.** Add Effect button\*
- **F.** Clear Appearance button
- **G.** Duplicate Selected Item button

\* Effects can be applied to the entire shape, or individual strokes or fills.

## Export for Screens

The Export for Screens dialogue allows us to efficiently export our artwork to numerous file types and sizes at once. To access the Export for Screens dialogue, access through the dropdown menus `File > Export > Export for Screens` or with keyboard shortcut `Option + Command + E` on Mac or `Control + Alt + E` on Windows.

The export is based on the artboards in the file, so make sure to set up your file properly with correctly sized arboards for your artwork. In the example below, the icon designs have the exact same width and height as their artboard, allowing them to export cleanly with no extra space around the edges and without accidentally cropping any of the artwork. You can also choose specific artboards to export, while omitting others.

![Export for screens dialogue]({{site.baseurl}}/images/course-content/week-5/export-for-screens.jpg)

1. **Artboards preview** - here you can select which artboards to export and you can rename the artboards
2. **Select export location** - use this button to find the proper location in your files to export to
3. **Scale** - select the scale of your export. You can select a scale multiplier (1x, 2x, etc.) or a specific width or height.
4. **Suffix** - a short string of text that will be added to the end of the filename to identify the export
5. **Format** - choose the file format for the exported file
6. **Create Sub-folders** - checking this will create a new folder for for each different scale or format that you export. I would recommend unchecking this, as most exports are only a few files at a time and it will just result in numerous unnecessary folders.
