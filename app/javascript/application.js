// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloReact from './components/hello';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('react-root'));
  // root.render(<HelloReact />);
});
