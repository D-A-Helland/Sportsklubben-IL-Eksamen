export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'stone'
    },
    navigationMenu: {
      slots: {
        link: 'group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2'
      },
      variants: {
        active: {
          false: {
            link: 'text-default'
          }
        }
      }
    }
  }
})
