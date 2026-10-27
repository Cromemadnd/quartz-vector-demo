---
title: Infobox — Starsea Library
description: A fictional public library in the Paper Kite Project, demonstrating structured article information.
tags: [Demo, Content components, Places]
navboxes:
  - title: "[Vector 2022 examples](features/)"
    color:
      light: "#c5d8ef"
      dark: "#293e57"
    rows:
      - label: Library
        content: "[English](features/infobox-en) · [简体中文](features/infobox)"
      - label: More examples
        content: "[Navigation templates](features/navigation) · [Reading layout](features/reading) · [Search and previews](features/search)"
infobox:
  title: Starsea Library
  subtitle: 星海图书馆
  image: features/assets/library.svg
  imageAlt: An illustration of a library beside a river
  caption: A fictional place created to demonstrate the layout
  color:
    light: "#c5d8ef"
    dark: "#293e57"
  rows:
    - heading: Overview
    - label: Type
      content: Public library
    - label: Project
      content: "**Paper Kite Project**"
    - label: Opening hours
      content: Tuesday–Sunday, 09:00–18:00
    - heading: Reading services
    - label: Collections
      content: Books, maps, and local archives
    - label: Related articles
      content: "[Reading layout](features/reading) · [Content formatting](features/content)"
  below: "[Back to the examples](features/)"
---

English | [简体中文](features/infobox)

Starsea Library is a fictional public library. This article demonstrates an infobox: on desktop, the information card sits to the right of the article; on narrow screens, it appears above the body.

## About the library

The card’s title, captions, and fields support inline Markdown. Section headings separate basic information from reading services, while the illustration helps readers recognize the subject.

Everything is defined in the article’s `infobox` frontmatter. No handwritten HTML is needed. Image paths and ordinary links resolve from the site root, so this article can link to other pages even though it lives in the `features/` folder.

## Colors and reading

Switch to dark mode to see the alternate section backgrounds. Change the text size or narrow your browser to check that images, fields, and links remain readable.

## Keep exploring

The bottom of this article includes a navigation template and categories generated from its tags. To try description matching, enter “Paper Kite Project” in the top search box.

The linked layout examples are currently in Chinese. To display the skin’s controls and site-defined menus in English too, use the demo’s `quartz.config.en.yaml` configuration. Changing the interface language does not translate articles automatically.
