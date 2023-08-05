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
      content: "自己紹介"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        display: false,
        data: "名前：辻永　泰輔（つじなが　たいすけ）"
      },
      {
        type: "image",
        depth: 0,
        display: false,
        data: "https://scrapbox.io/files/64c144e4ee5d8d001b149efe.jpg"
      },
      {
        type: "text",
        depth: 0,
        display: false,
        data: "所属：北海道情報大学　湯村研究室，ObotAI株式会社　アルバイト"
      },
      {
        type: "text",
        depth: 0,
        display: false,
        data: "普段やっていること"
      },
      {
        type: "text",
        depth: 1,
        display: false,
        data: "Webアプリケーション開発"
      }
    ]
  },
]
