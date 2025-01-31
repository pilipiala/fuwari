import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '啊茶茶の小窝',
  subtitle: '(゜-゜)つロ 干杯~',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // 主题颜色的默认色调，从 0 到 360。红色：0，青色：200，青色：250，粉色：345
    fixed: false,     // 为访客隐藏主题颜色选择器
  },
  banner: {
    enable: true,     // 开启横幅 false 改为 true
    src: 'assets/images/108297771_p0.png',   // 相对于/src目录。如果以"/"开头，则相对于 /public 目录
    position: 'center',      // 相当于object-position，只支持'top'，'center'，'bottom'。默认为"中心"
    credit: {
      enable: true,         
      text: '啊茶茶(゜-゜)つロ 干杯~ 🎵',              
      url: '#',  
      html: `<audio id="bgMusic" style="display:none">
        <source src="https://pub-932bcf23b7c54bdf90743ac393af13cd.r2.dev/%E9%9F%B3%E4%B9%90/%E5%9B%BE%E4%B9%A6%E9%A6%86%E5%AD%A6%E4%B9%A0%E5%AE%89%E9%9D%99%E8%BD%BB%E9%9F%B3%E4%B9%90.mp3" type="audio/mpeg">
      </audio>
      <script>
        (function() {
          function initAudioPlayer() {
            const creditLink = document.querySelector('.banner-credit');
            const audio = document.getElementById('bgMusic');
            
            if (!creditLink || !audio) {
              setTimeout(initAudioPlayer, 100);
              return;
            }
            
            creditLink.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              
              if (audio.paused) {
                audio.play().catch(function(error) {
                  console.log('播放失败:', error);
                });
              } else {
                audio.pause();
              }
              
              return false;
            }, true);
          }
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAudioPlayer);
          } else {
            initAudioPlayer();
          }
        })();
      </script>`
    }
  },
  toc: {
    enable: true,           // 在帖子右侧显示目录
    depth: 3                // 表中显示的最大标题深度，从 1 到 3
  },
  favicon: [    // 将此数组留空以使用默认的图标
    // {
    //   src: '/favicon/icon.png',    // 图标的路径，相对于 /public 目录
    //   theme: 'light',              // （可选）"浅色"或"深色"，仅当您有不同的浅色和深色模式图标时才设置
    //   sizes: '32x32',              // （可选）图标大小，仅当您有不同大小的图标时才设置
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: '我的Alist',
      url: 'https://alist-web-teg.pages.dev',     // 内部链接不应包含基本路径，因为它是自动添加的
      external: true,                               // 显示外部链接图标并将在新选项卡中打开
    },
    {
      name: '随机图站点',
      url: 'https://r2storage.acgr18share.workers.dev',     // 内部链接不应包含基本路径，因为它是自动添加的
      external: true,                               // 显示外部链接图标并将在新选项卡中打开
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pilipiala/fuwari',     // 内部链接不应包含基本路径，因为它是自动添加的
      external: true,                               // 显示外部链接图标并将在新选项卡中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // 相对于/src目录。如果以"/"开头，则相对于 /public 目录
  name: '啊茶茶',
  bio: '一个看不懂代码的小废物！',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // 访问 https://icones.js.org/ 获取图标代码
                                        // 如果尚未包含，您将需要安装相应的图标集
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com/bilibiala',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/pilipialia',
    },
    {
      name: 'QQ',
      icon: 'fa6-brands:qq',
      url: 'https://qm.qq.com/q/gNyjp83zW2',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/pilipiala',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

//补充：底部帖子简介更改链接办法，我修改了 rss.xml.ts 和 astro.config.mjs 中的" https://fuwari-32d.pages.dev/ ",或许更改后者就可以了