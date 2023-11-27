# 3DTekkom

[![Node](https://img.shields.io/node/v/vite)][node]

---

This project made to fulfill one of my Final Project Assignment. Feel free to utilize it 🙌

## Installation

See the [Bun Docs][bun] for the current version of Bun. I used [Vite][vite] to initialize react-app.

Install dependencies:
```
bun i
```

Run in dev mode:
```
bun run dev
```

I didn't include any `scene.bin`, `scene.gltf` and `textures` of the 3D assets in this repo, so it might return error if you try to run it.

There are two options to solve this:
- Download required files from the link provided in the `license.txt` inside of public folder
- Download different assets and change their paths on `Viewer.jsx`

## License

MIT

---

Thanks to all my friends for helping me finish this project. Cheers! 🥂

[node]: https://nodejs.org/en/blog/release/v20.10.0
[bun]: https://bun.sh/
[vite]: https://vitejs.dev/guide/