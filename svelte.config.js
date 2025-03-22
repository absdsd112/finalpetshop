import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      // default options are shown
      out: 'build',
      precompress: false,
      env: {
        host: 'HOST',
        port: 'PORT'
      }
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/pet-shop' : ''
    }
  }
};