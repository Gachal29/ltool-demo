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
      content: "LTooLとは"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "登壇中に資料を作成するプレゼンテーションツール"
      },
      {
        type: "image",
        depth: 0,
        data: "https://scrapbox.io/files/64cfdadddba5f3001c5904d0.png"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "研究背景"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "IT勉強会におけるLT文化"
      },
      {
        type: "text",
        depth: 1,
        data: "フィードバックを活かして、開発を前進させる"
      },
      {
        type: "text",
        depth: 0,
        data: "既存のプレゼンテーションツールの課題"
      },
      {
        type: "text",
        depth: 1,
        data: "資料の作成に時間を要する"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "LTって何？"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "Lightning Talk (LT)"
      },
      {
        type: "text",
        depth: 0,
        data: "短い時間で行うプレゼンテーション"
      },
      {
        type: "text",
        depth: 1,
        data: "5分程度"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "研究課題"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "資料の作成に時間を要する"
      },
      {
        type: "text",
        depth: 1,
        data: "開発する時間が減る"
      },
      {
        type: "text",
        depth: 1,
        data: "登壇のハードルが高い"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "研究目的"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "資料の作成に時間を使わないプレゼンテーションツールの開発"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "実現方法"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "作業メモからクリック操作で、スライドを生成する"
      },
      {
        type: "text",
        depth: 1,
        data: "作業メモ：開発などの際に作業内容を記録したメモ"
      },
      {
        type: "image",
        depth: 0,
        data: "https://scrapbox.io/files/64cfdadddba5f3001c5904d0.png"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "作業メモの作成"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "Scrapboxを利用して作成する"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64cfdb7b88fa9c001b9b26d4.png"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64cfdb85f4393e001cf6cc07.png"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "Scrapboxって何？"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "メモやノートを作成するWebサービス"
      },
      {
        type: "text",
        depth: 0,
        data: "WebAPI (Scrapbox API) を提供している"
      },
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "LTooL プレゼンテーション機能の使い方"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "プレゼンテーションテーマを選択する"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64aaa44ca55718001bab40c1.png"
      },
      {
        type: "text",
        depth: 0,
        data: "テーマスライドの表示"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64aaa46ff2280b001c3b05ea.png"
      },
      {
        type: "text",
        depth: 0,
        data: "各ページの内容を選択する"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64aaa5af9f617a001c4404da.png"
      },
      {
        type: "text",
        depth: 0,
        data: "内容スライドの表示"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64aaa626b933c0001b6b400b.png"
      },
      {
        type: "text",
        depth: 0,
        data: "質疑応答機能"
      },
      {
        type: "text",
        depth: 1,
        data: "音声認識を利用して、登壇者が話した内容をスライドに書き起こす"
      },
      {
        type: "image",
        depth: 0,
        data: "https://scrapbox.io/files/64cfde1088fa9c001b9b3998.png"
      },
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "実装"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "システム構成"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64cfdf88caf78a001c6866f5.png"
      },
      {
        type: "text",
        depth: 0,
        data: "プレゼンテーション機能のWebAPI"
      },
      {
        type: "image",
        depth: 1,
        data: "https://scrapbox.io/files/64cfe013632287001c9b9aaf.png"
      }
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "評価実験"
    },
    contentData: [
      {
        type: "text",
        depth: 0,
        data: "LTooLを利用するLT会"
      },
      {
        type: "text",
        depth: 1,
        data: "研究室内で実施予定"
      },
      {
        type: "text",
        depth: 1,
        data: "1人1ページ以上の作業メモを作成"
      },
      {
        type: "text",
        depth: 1,
        data: "LTooLを使用して、3~5分のLTを行う"
      },
      {
        type: "text",
        depth: 0,
        data: "アンケート"
      },
      {
        type: "text",
        depth: 1,
        data: "LTooLの使用感に関する内容"
      },
      {
        type: "text",
        depth: 1,
        data: "既存ツールとの比較"
      },
    ]
  },
  {
    type: "scrapbox",
    shortContent: {
      type: "text",
      content: "スケジュール"
    },
    contentData: [
      {
        type: "image",
        depth: 0,
        data: "https://scrapbox.io/files/64cfe10c632287001c9ba38f.png"
      }
    ]
  },
]
