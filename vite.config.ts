import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple'

export default defineConfig(({ command, mode }) => {
  // console.log('=======', command, mode)
  if (mode === 'app') {
    return {
      // dev 独有配置
      plugins: [vue(),
            electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: 'electron/app.js',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`
        input: 'electron/preload.ts',
      },
      // Optional: Use Node.js API in the Renderer process
      renderer: {},
    })
      ],
      // base:'./'
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
      plugins: [vue()]
    }
  }
})