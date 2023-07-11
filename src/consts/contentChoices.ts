import { Content } from "model/material"


export const PresentationThemeChoices = [
  "LTooL: 思い立った時にLTができるツール",
  "Scrapboxの更新をSlackで通知する",
  "大学4年生の目標",
  "学会発表してきた",
  "卒業研究テーマ",
  "アイディア紹介",
  "DjangoでWebアプリケーション開発",
  "使ってみたい技術"
]

export const PresentationContentChoices: Array<Content> = [
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "LTooLとは",
    },
    contentData: [
      {
        type: "text",
        depth: 1,
        display: false,
        data: "LT向けのプレゼンテーションツール"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "スライドを作りながら話す"
      },
      {
        type: "text",
        depth: 1,
        display: false,
        data: "登壇するときに必要なもの"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "作業記録：　活動の内容を記録したメモ"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "LTooL"
      },
      {
        type: "image",
        depth: 2,
        display: false,
        data: "https://scrapbox.io/files/64aa9d1a486bba001c4b1bad.png"
      },
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "LTって何？",
    },
    contentData: [
      {
        type: "text",
        depth: 1,
        display: false,
        data: "LT - Lightning Talk"
      },
      {
        type: "text",
        depth: 1,
        display: false,
        data: "短い発表時間のプレゼンテーション形式"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "5分間が多い"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "発表内容と方法は自由"
      },
      {
        type: "text",
        depth: 2,
        display: false,
        data: "活動に対して他者からフィードバックを得ることができる"
      },
      {
        type: "text",
        depth: 1,
        display: false,
        data: ""
      },
      {
        type: "string",
        depth: 1,
        display: false,
        data: ""
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "",
      content: "",
    },
    contentData: [
      {
        type: "string",
        depth: 1,
        display: false,
        data: ""
      }
    ]
  },
]
