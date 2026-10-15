/* Project media configuration. Add images freely; replace the GLB paths with
   exported CAD models and change modelIsPlaceholder to false when ready. */
const projectMedia = {
  foosball: {
    title: 'Mini mechatronic foosball table',
    images: [
      { src: 'assets/images/foosball-cad.webp', alt: 'CAD assembly of the mechatronic foosball table', caption: '01 / CAD assembly · project documentation' },
      { src: 'assets/images/foosball-prototype.webp', alt: 'Built foosball table prototype', caption: '02 / Physical prototype · project documentation' },
      { src: 'assets/images/foosball-electronics.webp', alt: 'Foosball control electronics and wiring', caption: '03 / Electronics integration · project documentation' }
    ],
    model: 'assets/models/foosball-concept.glb', modelIsPlaceholder: true
  },
  frequency: {
    title: 'AC frequency measurement system',
    images: [
      { src: 'assets/images/frequency-cad.webp', alt: 'CAD model of the frequency measurement enclosure', caption: '01 / Enclosure CAD · project documentation' },
      { src: 'assets/images/frequency-analysis.webp', alt: 'Frequency analysis interface from the measurement project', caption: '02 / Signal analysis · project documentation' },
      { src: 'assets/images/frequency-prototype.webp', alt: 'Assembled MDF enclosure of the frequency measurement prototype', caption: '03 / Manufactured enclosure · project documentation' }
    ],
    model: 'assets/models/frequency-concept.glb', modelIsPlaceholder: true
  },
  ecu: {
    title: 'ECU test system',
    images: [
      { src: 'assets/images/ecu-placeholder.svg', alt: 'Illustrative ECU test-system block diagram, not an actual project schematic', caption: '01 / Illustrative system diagram · project image pending' },
      { src: 'assets/images/pcb-placeholder.svg', alt: 'Placeholder for an ECU test PCB photograph', caption: '02 / PCB photograph placeholder · original image pending' },
      { src: 'assets/images/test-placeholder.svg', alt: 'Placeholder for ECU test results', caption: '03 / Validation evidence placeholder · test records pending' }
    ],
    model: 'assets/models/ecu-concept.glb', modelIsPlaceholder: true
  }
};

document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
});
const dialog = document.getElementById('image-dialog');
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

let viewerReady;
function loadViewerLibrary() {
  if (!viewerReady) viewerReady = import('./vendor/model-viewer.min.js').catch(error => { viewerReady = null; throw error; });
  return viewerReady;
}
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function button(className, text) { const node = element('button', className, text); node.type = 'button'; return node; }

document.querySelectorAll('[data-project]').forEach(article => {
  const key = article.dataset.project;
  const data = projectMedia[key];
  if (!data) return;
  const media = article.querySelector('.project-media');
  const tabs = element('div', 'media-tabs');
  tabs.setAttribute('role', 'group'); tabs.setAttribute('aria-label', `${data.title}: media type`);
  const photosButton = button('media-tab', 'IMAGES');
  const modelButton = button('media-tab', 'INTERACTIVE 3D');
  photosButton.setAttribute('aria-pressed', 'true'); modelButton.setAttribute('aria-pressed', 'false');
  tabs.append(photosButton, modelButton);
  const stage = element('div', 'media-stage');
  const mainButton = button('gallery-main');
  const mainImage = element('img'); mainImage.loading = 'lazy'; mainImage.decoding = 'async';
  mainButton.append(mainImage, element('span', 'expand-label', 'Expand ↗'));
  const modelPanel = element('div', 'model-panel'); modelPanel.hidden = true;
  const modelNote = element('span', 'model-note', data.modelIsPlaceholder ? 'ILLUSTRATIVE PLACEHOLDER · NOT ORIGINAL PROJECT CAD' : 'PROJECT MODEL · INTERACTIVE VIEW');
  const status = element('p', 'model-status', 'Loading 3D viewer…'); status.setAttribute('role', 'status');
  modelPanel.append(modelNote, status); stage.append(mainButton, modelPanel);
  const caption = element('p', 'media-caption'); caption.setAttribute('aria-live', 'polite');
  const thumbnails = element('div', 'gallery-thumbs'); thumbnails.setAttribute('role', 'group'); thumbnails.setAttribute('aria-label', `${data.title}: images`);
  const controls = element('div', 'model-controls'); controls.hidden = true;
  const reset = button('', 'Reset view'); const left = button('', 'Rotate left'); const right = button('', 'Rotate right');
  controls.append(left, right, reset);
  let selected = 0, viewer, loading = false;
  const thumbButtons = data.images.map((item, index) => {
    const thumb = button('gallery-thumb'); thumb.setAttribute('aria-label', `Show image ${index + 1}: ${item.alt}`);
    const image = element('img'); image.src = item.src; image.alt = ''; image.loading = 'lazy';
    thumb.append(image); thumb.addEventListener('click', () => selectImage(index)); thumbnails.append(thumb); return thumb;
  });
  function selectImage(index) {
    selected = index; const item = data.images[index];
    mainImage.src = item.src; mainImage.alt = item.alt; caption.textContent = item.caption;
    mainButton.setAttribute('aria-label', `Enlarge: ${item.alt}`);
    thumbButtons.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(index === i)));
  }
  mainImage.addEventListener('error', () => { caption.textContent = 'Image unavailable. Please select another image.'; });
  mainButton.addEventListener('click', () => {
    const item = data.images[selected]; const image = dialog.querySelector('img'); image.src = item.src; image.alt = item.alt;
    document.getElementById('dialog-caption').textContent = item.caption; dialog.showModal();
  });
  function showModel(active) {
    photosButton.setAttribute('aria-pressed', String(!active)); modelButton.setAttribute('aria-pressed', String(active));
    mainButton.hidden = active; thumbnails.hidden = active; modelPanel.hidden = !active; controls.hidden = !active;
    caption.textContent = active ? 'Drag to orbit · scroll or pinch to zoom · use buttons to rotate' : data.images[selected].caption;
  }
  photosButton.addEventListener('click', () => showModel(false));
  modelButton.addEventListener('click', async () => {
    showModel(true);
    if (viewer || loading) return;
    loading = true; status.hidden = false; status.textContent = 'Loading 3D viewer…';
    try {
      await loadViewerLibrary();
      viewer = element('model-viewer');
      viewer.setAttribute('alt', `${data.title}: ${data.modelIsPlaceholder ? 'illustrative placeholder model, not original CAD' : 'project model'}`);
      viewer.setAttribute('camera-controls', ''); viewer.setAttribute('touch-action', 'pan-y');
      viewer.setAttribute('camera-orbit', '35deg 65deg auto'); viewer.setAttribute('shadow-intensity', '.7');
      viewer.setAttribute('interaction-prompt', 'none'); viewer.setAttribute('disable-pan', '');
      viewer.setAttribute('loading', 'eager'); viewer.setAttribute('src', data.model);
      viewer.addEventListener('load', () => { status.hidden = true; loading = false; });
      viewer.addEventListener('error', () => {
        status.textContent = 'The 3D model could not load. The image gallery remains available.';
        status.hidden = false; viewer.remove(); viewer = null; loading = false;
      });
      modelPanel.prepend(viewer);
    } catch {
      status.textContent = '3D is unavailable in this browser. You can still explore the images.';
      loading = false;
    }
  });
  reset.addEventListener('click', () => { if (viewer) { viewer.cameraOrbit = '35deg 65deg auto'; viewer.cameraTarget = 'auto auto auto'; } });
  function rotate(degrees) {
    if (!viewer || !viewer.loaded) return;
    const orbit = viewer.getCameraOrbit();
    viewer.cameraOrbit = `${orbit.theta + degrees * Math.PI / 180}rad ${orbit.phi}rad ${orbit.radius}m`;
  }
  left.addEventListener('click', () => rotate(-30)); right.addEventListener('click', () => rotate(30));
  media.append(tabs, stage, caption, thumbnails, controls); selectImage(0);
});
