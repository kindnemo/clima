function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    // Remove './' and keep filename
    const name = key.replace('./', '').replace(/\.\w+$/, '');
    images[name] = r(key);
  });
  return images;
}

// Exporting all icons from the specified directory because webpack requires static paths for imports
export const icons = importAll(require.context('./images/animation-ready', false, /\.(png|jpe?g|svg)$/));
