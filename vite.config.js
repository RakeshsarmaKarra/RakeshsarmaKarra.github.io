import { defineConfig } from 'vite'

export default defineConfig({
    // If you are deploying to https://<USERNAME>.github.io/<REPO>/
    // Set this to '/<REPO>/'. If it's the root user site, set to '/'.
    // Assuming repo name is 'portfolio' based on directory name, but user might need to change this.
    base: '/portfolio/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})
