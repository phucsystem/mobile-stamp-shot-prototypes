/* ==========================================================================
   StampShot - CJX Animations & Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Prototype Vertical Navigation Sidebar --- */
  (function buildProtoNav() {
    var currentFile = window.location.pathname.split('/').pop() || '';

    var screens = [
      { group: 'Phase 1 Screens', items: [
        { file: 's01-camera.html', label: 'Camera' },
        { file: 's02-gallery.html', label: 'Gallery' },
        { file: 's03-settings.html', label: 'Settings' },
        { file: 's04-photo-preview.html', label: 'Photo Preview' },
      ]},
      { group: 'Phase 2 - Projects', items: [
        { file: 's05-projects-list.html', label: 'Projects List' },
        { file: 's06-project-detail.html', label: 'Project Detail' },
      ]},
      { group: 'Phase 3 - Map', items: [
        { file: 's07-map-view.html', label: 'Map View' },
      ]},
    ];

    var nav = document.createElement('nav');
    nav.className = 'proto-nav';

    var versionLabel = document.createElement('div');
    versionLabel.className = 'proto-nav-version';
    versionLabel.textContent = 'StampShot v0.0.1';
    nav.appendChild(versionLabel);

    screens.forEach(function (section) {
      var groupLabel = document.createElement('span');
      groupLabel.className = 'proto-nav-label';
      groupLabel.textContent = section.group;
      nav.appendChild(groupLabel);

      section.items.forEach(function (screen) {
        var link = document.createElement('a');
        link.href = screen.file;
        link.textContent = screen.label;
        if (currentFile === screen.file) {
          link.className = 'active';
        }
        nav.appendChild(link);
      });
    });

    document.body.insertBefore(nav, document.body.firstChild);

    /* --- Hamburger Toggle for proto-nav on medium screens --- */
    var isMobile = window.matchMedia('(max-width: 500px)').matches;
    if (!isMobile) {
      var toggleBtn = document.createElement('button');
      toggleBtn.className = 'proto-nav-toggle';
      toggleBtn.setAttribute('aria-label', 'Toggle screen navigation');
      toggleBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      document.body.appendChild(toggleBtn);

      var navOpen = true;
      toggleBtn.addEventListener('click', function () {
        navOpen = !navOpen;
        nav.style.transform = navOpen ? 'translateX(0)' : 'translateX(-100%)';
        document.body.style.paddingLeft = navOpen ? '' : '0';
      });
    }
  })();

  /* --- CJX Stage Entrance Animations --- */
  var cjxStage = document.body.className;

  var entranceElements = document.querySelectorAll('[data-cjx-entrance]');
  entranceElements.forEach(function (element, elementIndex) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(12px)';
    var delay = elementIndex * getStaggerForStage(cjxStage);

    setTimeout(function () {
      element.style.transition = getTransitionForStage(cjxStage);
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  });

  function getTransitionForStage(stage) {
    if (stage.includes('cjx-usage')) {
      return 'opacity 0.3s ease, transform 0.3s ease';
    }
    if (stage.includes('cjx-retention')) {
      return 'opacity 0.4s ease, transform 0.4s ease';
    }
    return 'opacity 0.4s ease, transform 0.4s ease';
  }

  function getStaggerForStage(stage) {
    if (stage.includes('cjx-usage')) return 60;
    if (stage.includes('cjx-retention')) return 80;
    return 80;
  }

  /* --- Toggle Switch --- */
  var toggleSwitches = document.querySelectorAll('.toggle-switch');
  toggleSwitches.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
    });
  });

  /* --- Picker Option Toggle --- */
  var pickerOptions = document.querySelectorAll('.picker-option');
  pickerOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      var parentGroup = option.closest('.picker-group');
      if (parentGroup) {
        parentGroup.querySelectorAll('.picker-option').forEach(function (otherOpt) {
          otherOpt.classList.remove('active');
        });
      }
      option.classList.add('active');
    });
  });

  /* --- Color Swatch Toggle --- */
  var colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(function (swatch) {
    swatch.addEventListener('click', function () {
      var parentGrid = swatch.closest('.color-picker-grid');
      if (parentGrid) {
        parentGrid.querySelectorAll('.color-swatch').forEach(function (otherSwatch) {
          otherSwatch.classList.remove('active');
        });
      }
      swatch.classList.add('active');
    });
  });

  /* --- Template Card Toggle --- */
  var templateCards = document.querySelectorAll('.template-card');
  templateCards.forEach(function (card) {
    card.addEventListener('click', function () {
      templateCards.forEach(function (otherCard) {
        otherCard.classList.remove('active');
      });
      card.classList.add('active');
    });
  });

  /* --- Toast Show Helper --- */
  window.showToast = function (message) {
    var toast = document.querySelector('.toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(function () {
        toast.classList.remove('show');
      }, 2500);
    }
  };

  /* --- Capture Button Spring Animation --- */
  var captureBtn = document.querySelector('.capture-btn');
  if (captureBtn) {
    captureBtn.addEventListener('click', function () {
      captureBtn.style.transform = 'scale(0.88)';
      setTimeout(function () {
        captureBtn.style.transform = 'scale(1.05)';
      }, 100);
      setTimeout(function () {
        captureBtn.style.transform = 'scale(1)';
      }, 250);

      var flash = document.querySelector('.capture-flash');
      if (flash) {
        flash.style.animation = 'none';
        flash.offsetHeight;
        flash.style.animation = 'captureFlash 0.3s ease-out';
      }
    });
  }

  /* --- Gallery Item Tap Preview (simulate) --- */
  var galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.showToast) {
        window.showToast('Full-screen preview would open');
      }
    });
  });

  /* --- Debug Drawer Toggle --- */
  var settingsLongPress;
  var settingsBtn = document.querySelector('[data-settings-btn]');
  var debugDrawerContainer = document.querySelector('.debug-drawer-container');

  if (settingsBtn && debugDrawerContainer) {
    settingsBtn.addEventListener('mousedown', function () {
      settingsLongPress = setTimeout(function () {
        debugDrawerContainer.style.display = 'block';
      }, 500);
    });
    settingsBtn.addEventListener('mouseup', function () {
      clearTimeout(settingsLongPress);
    });
    settingsBtn.addEventListener('mouseleave', function () {
      clearTimeout(settingsLongPress);
    });
  }

  var closeDebugBtn = document.querySelector('[data-close-debug]');
  if (closeDebugBtn && debugDrawerContainer) {
    closeDebugBtn.addEventListener('click', function () {
      debugDrawerContainer.style.display = 'none';
    });
  }

  var debugBackdrop = document.querySelector('.debug-drawer-backdrop');
  if (debugBackdrop && debugDrawerContainer) {
    debugBackdrop.addEventListener('click', function () {
      debugDrawerContainer.style.display = 'none';
    });
  }

});
