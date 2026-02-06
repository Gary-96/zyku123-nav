// 统一菜单配置
const menuConfig = [
    { title: "常用推荐", icon: "linecons-star", link: "index.html#常用推荐" },
    { title: "社区资讯", icon: "linecons-doc", link: "index.html#社区资讯" },
    { title: "AI工具", icon: "linecons-cog", link: "index.html#ai-tools" },
    { title: "跨境支付", icon: "linecons-tag", link: "index.html#payment" },
    { title: "发现产品", icon: "linecons-lightbulb", link: "index.html#发现产品" },
    { title: "界面灵感", icon: "linecons-lightbulb", link: "index.html#界面灵感" },
    { title: "网页灵感", icon: "linecons-lightbulb", link: "index.html#网页灵感" },
    { title: "图标素材", icon: "linecons-thumbs-up", link: "index.html#图标素材" },
    { title: "LOGO设计", icon: "linecons-thumbs-up", link: "index.html#LOGO设计" },
    { title: "平面素材", icon: "linecons-thumbs-up", link: "index.html#平面素材" },
    { title: "UI资源", icon: "linecons-thumbs-up", link: "index.html#UI资源" },
    { title: "Sketch资源", icon: "linecons-thumbs-up", link: "index.html#Sketch资源" },
    { title: "字体资源", icon: "linecons-thumbs-up", link: "index.html#字体资源" },
    { title: "Mockup", icon: "linecons-thumbs-up", link: "index.html#Mockup" },
    { title: "摄影图库", icon: "linecons-thumbs-up", link: "index.html#摄影图库" },
    { title: "PPT资源", icon: "linecons-thumbs-up", link: "index.html#PPT资源" },
    { title: "图形创意", icon: "linecons-diamond", link: "index.html#图形创意" },
    { title: "界面设计", icon: "linecons-diamond", link: "index.html#界面设计" },
    { title: "交互动效", icon: "linecons-diamond", link: "index.html#交互动效" },
    { title: "在线配色", icon: "linecons-diamond", link: "index.html#在线配色" },
    { title: "在线工具", icon: "linecons-diamond", link: "index.html#在线工具" },
    { title: "Chrome插件", icon: "linecons-diamond", link: "index.html#Chrome插件" },
    { title: "设计规范", icon: "linecons-pencil", link: "index.html#设计规范" },
    { title: "视频教程", icon: "linecons-pencil", link: "index.html#视频教程" },
    { title: "设计文章", icon: "linecons-pencil", link: "index.html#设计文章" },
    { title: "设计电台", icon: "linecons-pencil", link: "index.html#设计电台" },
    { title: "交互设计", icon: "linecons-pencil", link: "index.html#交互设计" },
    { title: "UED团队", icon: "linecons-user", link: "index.html#UED团队" },
    { 
        title: "关于本站", 
        icon: "linecons-heart", 
        link: "about.html",
        special: true
    }
];

// 渲染菜单的函数
function renderCommonMenu() {
    const menuContainer = document.getElementById('main-menu');
    if (!menuContainer) return;

    let html = '';
    menuConfig.forEach(item => {
        if (item.special) {
            // 关于本站特殊样式
            html += `
                <li>
                    <a href="${item.link}">
                        <i class="${item.icon}"></i>
                        <span class="tooltip-blue">${item.title}</span>
                        <span class="label label-Primary pull-right hidden-collapsed">♥︎</span>
                    </a>
                </li>`;
        } else {
            html += `
                <li>
                    <a href="${item.link}" class="smooth">
                        <i class="${item.icon}"></i>
                        <span class="title">${item.title}</span>
                    </a>
                </li>`;
        }
    });
    menuContainer.innerHTML = html;
}