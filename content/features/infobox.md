---
title: 信息框：星海图书馆
description: 纸鸢计划的示例公共图书馆，用来演示条目右侧的结构化资料卡。
tags: [演示, 内容组件, 地点]
navboxes: [0]
infobox:
  title: 星海图书馆
  subtitle: Starsea Library
  image: features/assets/library.svg
  imageAlt: 图书馆与河流的示意插画
  caption: 这是用于演示排版的虚构地点
  color:
    light: "#c5d8ef"
    dark: "#293e57"
  rows:
    - heading: 基本资料
    - label: 类型
      content: 公共图书馆
    - label: 所属项目
      content: "**纸鸢计划**"
    - label: 开放时间
      content: 周二至周日 09:00–18:00
    - heading: 阅读服务
    - label: 馆藏
      content: 图书、地图与地方档案
    - label: 相关条目
      content: "[阅读布局](features/reading) · [内容排版](features/content)"
  below: "[返回功能示例](features/)"
---

简体中文 | [English](features/infobox-en)

星海图书馆是一座虚构的公共图书馆。这篇文章用来演示信息框：桌面上，资料卡位于正文右侧；窄屏上，它会排在正文上方。

## 图书馆概况

资料卡里的标题、说明与字段支持行内 Markdown。分组标题用于把基本资料和阅读服务分开，图片则帮助读者快速识别条目。

这些内容都写在文章头部的 `infobox` 中，不需要手动写 HTML。图片和链接按站点根目录解析，因此这篇位于 `features/` 目录中的文章也能正确访问其他页面。

## 配色与阅读

切换到深色主题，可以看到分组标题改用对应的深色背景。调整文字大小或缩小浏览器，检查图片、字段和链接是否仍然易读。

## 继续探索

这篇文章底部还引用了[共享导航模板](features/navigation)，并用标签生成分类栏。要验证搜索描述匹配，可以在顶部搜索框输入「纸鸢计划」。
