import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sophie",
  description: "笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Journal', link: '/journal/' },
      { text: 'Note', link: '/note/' },
      { text: 'Algorithm', link: '/algorithm/' },
    ],


    sidebar: {

      '/journal/': [
        {
          text: '进度条',
          items: [
            { text: '周迹', 
              collapsed: true,
              items:[
                {text: 'week1', link: '/journal/week/week1' },
              ]
             },
            { text: '月迹', 
              collapsed: true,
              items:[
                {text: 'month1', link: '/journal/month/month1' },
              ]},
            { text: '年迹',
              collapsed: true,
              items:[
                { text: 'year1', link: '/journal/year/year1' },
              ] },
          ]
        }
      ],

      '/note/': [
        {
          text: '任务册',
          items: [
            { text: 'data struct', 
              collapsed: true,
              items:[
                { text: 'grapg', link: '/note/data_struct/data_struct1' },
                { text: 'note3', link: '/note/note3' },
              ]},
            { text: 'note2', link: '/note/note2' },
            { text: 'note3', link: '/note/note3' },
          ]
        }
      ],

      '/algorithm/': [
        {
          text: '奇思妙想',
          items: [
            { text: 'algorithm1', link: '/algorithm/algorithm1' },
            { text: 'algorithm2', link: '/algorithm/algorithm2' },
            { text: 'algorithm3', link: '/algorithm/algorithm3' },
          ]
        }
      ],



    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
