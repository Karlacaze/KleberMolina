/* Project media configuration. Add images or videos freely ({ video: 'path.mp4', poster: 'img' }).
   The 3D tab appears only when a project has a model with modelIsPlaceholder: false. */
const projectMedia = {
  ecu: {
    title: 'ECU power management & testing system',
    featured: { src: 'assets/images/ECU_1/final_pcbs_top_view_background_removed.png', alt: 'Final assembled ECU power management PCBs with the background removed', caption: 'Final ECU Power Management PCBs' },
    secondaryFeatured: { src: 'assets/images/ECU_1/pcb_cad_3d_view.png', alt: 'KiCad 3D view of the ECU power management PCB' },
    images: [
      { src: 'assets/images/ECU_1/certificate_of_participation_expo_ingenierias.png', alt: 'Certificate of participation in ExpoIngenierías', caption: 'Exposition Certificate' },
      { src: 'assets/images/ECU_1/First_circuit_schematic.png', alt: 'First circuit test in LTSpice', caption: 'First LTSpice Test' },
      { src: 'assets/images/ECU_1/Raw_protoboard_circuit.jpeg', alt: 'First circuit assembled on a protoboard', caption: 'First Protoboard Test' },
      { src: 'assets/images/ECU_1/Kicad_schematic.png', alt: 'KiCad schematic of the ECU power management circuit', caption: 'KiCad Schematic' },
      { src: 'assets/images/ECU_1/kicad_3d_view_top_pcb.png', alt: 'Top view of the PCB in KiCad', caption: 'PCB Top View' },
      { src: 'assets/images/ECU_1/actual_iternational_ecu.jpeg', alt: 'International truck ECU used to test the system', caption: 'International Truck ECU Used for Testing' },
      { video: 'assets/images/ECU_1/video_demostration.mp4', alt: 'Short video demonstration of the ECU testing system', caption: 'Short Demonstration' }
    ]
  },
  fred: {
    title: 'Robotic assembly station — MIT FrED Factory',
    featured: { src: 'assets/images/FredFactory/final_station_3.jpeg', alt: 'MIT FrED Factory Station 3 robotic assembly station', caption: 'MIT FrED Factory Station 3' },
    images: [
      { src: 'assets/images/FredFactory/feeding_of_the_joints.jpeg', alt: 'Feeding the joints into the assembly station', caption: '01 / Feeding the joints' },
      { src: 'assets/images/FredFactory/picking_aluminium_profiles.jpeg', alt: 'Picking aluminium profiles for assembly', caption: '02 / Picking aluminium profiles' },
      { src: 'assets/images/FredFactory/placing_aluminium_profiles.jpeg', alt: 'Placing aluminium profiles in the assembly station', caption: '03 / Placing aluminium profiles' },
      { src: 'assets/images/FredFactory/grabing_ventilador.jpeg', alt: 'Grabbing the ventilator component', caption: '04 / Grabbing the ventilator' },
      { src: 'assets/images/FredFactory/placing_ventilador.jpeg', alt: 'Placing the ventilator component', caption: '05 / Placing the ventilator' }
    ]
  },
  tinyml: {
    title: 'Embedded vision & robot control platform',
    featured: { src: 'assets/images/TinyML/car_no_background.png', alt: 'Tracked TinyML robot with its car-shaped body', caption: 'TinyML autonomous robot platform' },
    images: [
      { src: 'assets/images/TinyML/top_view_stm32_rasp_integration_and_mpu.jpeg', alt: 'Top view of the STM32 Nucleo, MPU9250 and Raspberry Pi 5 integration', caption: '01 / STM32 + Raspberry Pi 5 + MPU9250 integration', rotate: true },
      { src: 'assets/images/web/tinyml_stm32_mpu.jpg', alt: 'STM32 Nucleo board wired to an MPU9250 IMU', caption: '02 / STM32 NUCLEO-F446RE with MPU9250 IMU' },
      { src: 'assets/images/web/tinyml_camera.jpg', alt: 'Raspberry Pi 5 with active cooler and Pi Camera module', caption: '03 / Raspberry Pi 5 and camera for image processing' }
    ]
  },
  foosball: {
    title: 'Mini mechatronic foosball table',
    images: [
      { src: 'assets/images/foosball/finished_result.jpg', alt: 'Finished foosball robot with joystick controller and LCD scoreboard', caption: '01 / Finished prototype · joystick controller and LCD score' },
      { src: 'assets/images/foosball/ensamble_completo.png', alt: 'Complete CAD assembly of the foosball table', caption: '02 / Full CAD assembly' },
      { src: 'assets/images/foosball/engranes.png', alt: 'CAD of the custom gear system', caption: '03 / Custom gear system for faster player movement' },
      { src: 'assets/images/foosball/golpeador.png', alt: 'CAD of the solenoid striker mechanism', caption: '04 / Solenoid striker mechanism' },
      { src: 'assets/images/foosball/finished_result_inside.jpg', alt: 'Inside the foosball table showing the mechanism', caption: '05 / Inside the table' },
      { src: 'assets/images/foosball/inside_arduino.jpg', alt: 'Arduino and stepper driver wiring inside the case', caption: '06 / Control electronics' },
      { src: 'assets/images/foosball/inside_powerAC_DC.jpg', alt: 'Custom AC–DC power supply with 12 V and 5 V outputs', caption: '07 / Custom AC–DC supply · 12 V / 5 V' },
      { src: 'assets/images/foosball/circuits_schematic.png', alt: 'Circuit schematic of the foosball control system', caption: '08 / Circuit schematic' }
    ]
  },
  frequency: {
    title: 'AC frequency measurement system',
    images: [
      { src: 'assets/images/frequency-analysis/box_itself_irl.jpg', alt: 'Manufactured MDF case of the measurement system', caption: '01 / Manufactured MDF case' },
      { src: 'assets/images/frequency-analysis/graph_voltage_vs_time.png', alt: 'Measured signal plotted over time', caption: '02 / Live signal acquisition · Matplotlib' },
      { src: 'assets/images/frequency-analysis/mass_center_of_frecuency_graph.png', alt: 'Frequency estimate tracked across measurements', caption: '03 / Frequency estimate across measurements' },
      { src: 'assets/images/frequency-analysis/structural_analysis_view.png', alt: 'SolidWorks structural analysis of the case', caption: '04 / Structural analysis · SolidWorks' },
      { src: 'assets/images/frequency-analysis/exploted_view_box_cad_view.jpg', alt: 'Exploded CAD view of the case', caption: '05 / Exploded CAD view' },
      { src: 'assets/images/frequency-analysis/cross_cut_of_box_cad_view.jpg', alt: 'Cross-section CAD view of the case', caption: '06 / Cross-section view' }
    ]
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
const dialogVideo = document.createElement('video');
dialogVideo.controls = true; dialogVideo.preload = 'none'; dialogVideo.playsInline = true; dialogVideo.hidden = true;
dialog.querySelector('img').after(dialogVideo);
dialog.addEventListener('close', () => { dialogVideo.pause(); dialogVideo.removeAttribute('src'); dialogVideo.load(); });
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
function openImage(src, alt, caption, rotate = false) {
  dialogVideo.pause(); dialogVideo.hidden = true;
  const image = dialog.querySelector('img'); image.hidden = false; image.src = src; image.alt = alt;
  dialog.classList.toggle('rotate-counterclockwise', rotate);
  document.getElementById('dialog-caption').textContent = caption; dialog.showModal();
}
function openVideo(item) {
  dialog.classList.remove('rotate-counterclockwise');
  dialog.querySelector('img').hidden = true;
  dialogVideo.hidden = false; dialogVideo.src = item.video; dialogVideo.setAttribute('aria-label', item.alt);
  document.getElementById('dialog-caption').textContent = item.caption; dialog.showModal();
}
document.querySelectorAll('.zoomable').forEach(zoom => {
  const image = zoom.querySelector('img');
  zoom.setAttribute('aria-label', `Enlarge: ${image.alt}`);
  zoom.addEventListener('click', () => openImage(image.src, image.alt, zoom.dataset.caption));
});

/* Gentle fade-in as sections scroll into view */
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.section-heading, .role, .project, .highlights, .about-grid, .skills-grid, .contact').forEach(node => {
    node.classList.add('reveal'); observer.observe(node);
  });
}

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
  const hasModel = Boolean(data.model) && !data.modelIsPlaceholder;
  const media = article.querySelector('.project-media');
  if (data.featured) {
    [data.featured, data.secondaryFeatured].filter(Boolean).forEach(item => {
      const featured = element('div', 'ecu-featured');
      const image = element('img'); image.src = item.src; image.alt = item.alt; image.loading = 'lazy';
      featured.append(image);
      media.append(featured);
    });
    const previews = element('div', 'ecu-previews');
    previews.setAttribute('role', 'group'); previews.setAttribute('aria-label', `${data.title}: photos and demonstration`);
    data.images.forEach((item, index) => {
      const figure = element('figure', 'ecu-preview');
      const preview = button('ecu-preview-button');
      preview.setAttribute('aria-label', `${item.video ? 'Play' : 'Enlarge'}: ${item.caption}`);
      if (item.video) {
        const video = element('video'); video.src = item.video; video.preload = 'metadata'; video.muted = true; video.playsInline = true;
        video.setAttribute('aria-hidden', 'true');
        preview.append(video, element('span', 'play-badge', '▶'));
      } else {
        const thumbnail = element('img'); thumbnail.src = item.src; thumbnail.alt = ''; thumbnail.loading = 'lazy';
        if (item.rotate) thumbnail.classList.add('rotate-counterclockwise');
        preview.append(thumbnail);
      }
      preview.addEventListener('click', () => item.video ? openVideo(item) : openImage(item.src, item.alt, item.caption, item.rotate));
      if (key === 'fred') {
        const visual = element('div', 'fred-preview-visual');
        visual.append(preview);
        if (index < data.images.length - 1) {
          const next = data.images[index + 1];
          const arrow = element('span', 'fred-process-arrow', '→');
          arrow.setAttribute('role', 'button');
          arrow.setAttribute('tabindex', '0');
          arrow.setAttribute('aria-label', `Open next step: ${next.caption}`);
          const advance = event => {
            event.stopPropagation();
            if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
            if (event.type === 'keydown') event.preventDefault();
            openImage(next.src, next.alt, next.caption, next.rotate);
          };
          arrow.addEventListener('click', advance);
          arrow.addEventListener('keydown', advance);
          visual.append(arrow);
        }
        figure.append(visual, element('figcaption', '', item.caption));
      } else {
        figure.append(preview, element('figcaption', '', item.caption));
      }
      previews.append(figure);
    });
    (key === 'fred' ? media : article.querySelector('.project-copy')).append(previews);
    return;
  }
  const tabs = element('div', 'media-tabs');
  tabs.setAttribute('role', 'group'); tabs.setAttribute('aria-label', `${data.title}: media type`);
  const photosButton = button('media-tab', 'IMAGES');
  const modelButton = button('media-tab', 'INTERACTIVE 3D');
  photosButton.setAttribute('aria-pressed', 'true'); modelButton.setAttribute('aria-pressed', 'false');
  tabs.append(photosButton, modelButton);
  const stage = element('div', 'media-stage');
  const mainButton = button('gallery-main');
  const mainImage = element('img'); mainImage.decoding = 'async';
  mainButton.append(mainImage, element('span', 'expand-label', 'Expand ↗'));
  const mainVideo = element('video', 'gallery-video'); mainVideo.controls = true; mainVideo.preload = 'none'; mainVideo.playsInline = true; mainVideo.hidden = true;
  const modelPanel = element('div', 'model-panel'); modelPanel.hidden = true;
  const modelNote = element('span', 'model-note', 'PROJECT MODEL · INTERACTIVE VIEW');
  const status = element('p', 'model-status', 'Loading 3D viewer…'); status.setAttribute('role', 'status');
  modelPanel.append(modelNote, status); stage.append(mainButton, mainVideo, modelPanel);
  const caption = element('p', 'media-caption'); caption.setAttribute('aria-live', 'polite');
  const thumbnails = element('div', 'gallery-thumbs'); thumbnails.setAttribute('role', 'group'); thumbnails.setAttribute('aria-label', `${data.title}: images`);
  const controls = element('div', 'model-controls'); controls.hidden = true;
  const reset = button('', 'Reset view'); const left = button('', 'Rotate left'); const right = button('', 'Rotate right');
  controls.append(left, right, reset);
  let selected = 0, viewer, loading = false;
  const thumbButtons = data.images.map((item, index) => {
    const thumb = button('gallery-thumb'); thumb.setAttribute('aria-label', `Show ${item.video ? 'video' : 'image'} ${index + 1}: ${item.alt}`);
    const image = element('img'); image.src = item.video ? item.poster : item.src; image.alt = ''; image.loading = 'lazy';
    thumb.append(image);
    if (item.video) thumb.append(element('span', 'play-badge', '▶'));
    thumb.addEventListener('click', () => selectImage(index)); thumbnails.append(thumb); return thumb;
  });
  function selectImage(index) {
    selected = index; const item = data.images[index];
    const isVideo = Boolean(item.video);
    mainButton.hidden = isVideo; mainVideo.hidden = !isVideo;
    if (isVideo) {
      if (mainVideo.getAttribute('src') !== item.video) { mainVideo.src = item.video; mainVideo.poster = item.poster; }
      mainVideo.setAttribute('aria-label', item.alt);
    } else {
      mainVideo.pause();
      mainImage.src = item.src; mainImage.alt = item.alt;
      mainButton.setAttribute('aria-label', `Enlarge: ${item.alt}`);
    }
    caption.textContent = item.caption;
    thumbButtons.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(index === i)));
  }
  mainImage.addEventListener('error', () => { caption.textContent = 'Image unavailable. Please select another image.'; });
  mainButton.addEventListener('click', () => { const item = data.images[selected]; openImage(item.src, item.alt, item.caption); });
  function showModel(active) {
    photosButton.setAttribute('aria-pressed', String(!active)); modelButton.setAttribute('aria-pressed', String(active));
    const isVideo = Boolean(data.images[selected].video);
    mainButton.hidden = active || isVideo; mainVideo.hidden = active || !isVideo;
    if (active) mainVideo.pause();
    thumbnails.hidden = active; modelPanel.hidden = !active; controls.hidden = !active;
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
      viewer.setAttribute('alt', `${data.title}: project model`);
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
  if (hasModel) media.append(tabs);
  media.append(stage, caption, thumbnails);
  if (hasModel) media.append(controls);
  selectImage(0);
});
