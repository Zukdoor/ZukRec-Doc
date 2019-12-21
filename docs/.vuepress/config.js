module.exports = {
  locales: {
    "/": {
      selectText: "选择语言",
      label: "简体中文",
      editLinkText: "在 GitHub 上编辑此页",
      lang: "zh-CN",
      title: "集客门 - 开发者中心",
      description:
        "开发者可以在这里查阅集客门各项服务的详细文档，以及历史更新记录。"
    },
    "/en/": {
      lang: "en-US",
      title: "Zukdoor - Developer Center",
      description:
        "Developers can look up detailed documentation and changelogs for all Zukdoor services."
    }
  },
  themeConfig: {
    sidebar: "auto",
    logo: "/logo.png",
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        }
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      }
    }
  }
};
