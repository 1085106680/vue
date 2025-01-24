import { CodeTabs } from "/root/web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_f85491175ab1b1abd947c76628099e43/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/root/web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_f85491175ab1b1abd947c76628099e43/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/root/web/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.73_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuep_f85491175ab1b1abd947c76628099e43/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
