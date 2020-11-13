/**
 * faesslich Tooltip
 * @author Fabian Esser <post@faesslich.de>
 * @description small vanilla JS tooltip by faesslich (https://github.com/faesslich)
 * @version 1.0.0
 */

/* eslint-disable-next-line no-undef */
fTip = function (options = {}) {
  const $q = document.querySelector.bind(document);
  const delay = options.delay || 150;
  const offset = options.distance || 15;
  const selectorName = 'fTip';

  document.body.addEventListener('mouseover', function (e) {
    if (!e.target.hasAttribute('data-tooltip')) {
      return;
    }

    const tooltip = document.createElement('div');
    const maxWidth = e.target.getAttribute('data-width') + 'px' || 'inherit';
    const bgColor = e.target.getAttribute('data-bg') || '';
    const textColor = e.target.getAttribute('data-color') || '';
    let pos = e.target.getAttribute('data-position') || 'center top';
    let posHorizontal = pos.split(' ')[0];
    let posVertical = pos.split(' ')[1];
    let toolTipContent = e.target.getAttribute('data-tooltip');

    if (toolTipContent.includes('[[') && toolTipContent.includes(']]')) {
      let ttContentSelector = toolTipContent.replace('[[', '').replace(']]', '').trim();
      let ttContentSelectorContent = $q((ttContentSelector.includes('.') ? '' : '.') + ttContentSelector);
      toolTipContent = ttContentSelectorContent ? ttContentSelectorContent.innerHTML : toolTipContent;
    }

    tooltip.style.maxWidth = maxWidth;
    if (bgColor) {
      tooltip.style.backgroundColor = bgColor;
      tooltip.style.borderTopColor = bgColor;
      tooltip.style.borderBottomColor = bgColor;
    }
    if (bgColor) {
      tooltip.style.color = textColor;
    }
    tooltip.className = selectorName + ' ' + selectorName + '-' + pos.replace(' ', '-');
    tooltip.innerHTML = toolTipContent;

    document.body.appendChild(tooltip);
    positionAt(e.target, tooltip, posHorizontal, posVertical);
    tooltip.classList.add('active');
  });

  document.body.addEventListener('mouseout', function (e) {
    if (e.target.hasAttribute('data-tooltip')) {
      $q('.' + selectorName).classList.remove('active');
      setTimeout(function () {
        document.body.removeChild($q('.' + selectorName));
      }, delay);
    }
  });


  /**
   * Positions the tooltip.
   *
   * @param parent
   * @param tooltip
   * @param posHorizontal
   * @param posVertical
   */
  function positionAt(parent, tooltip, posHorizontal, posVertical) {
    let parentCoords = parent.getBoundingClientRect();
    let left;
    let top;

    switch (posVertical) {
      case 'center':
        top = ((parseInt(parentCoords.top, 10) + parseInt(parentCoords.bottom, 10)) / 2) - (tooltip.offsetHeight / 2);
        break;
      case 'bottom':
        top = parseInt(parentCoords.bottom, 10) + offset;
        break;
      default:
      case 'top':
        top = parseInt(parentCoords.top, 10) - tooltip.offsetHeight - offset;
    }

    switch (posHorizontal) {
      case 'left':
        left = parseInt(parentCoords.left, 10);
        if (posVertical === 'center') {
          left = parseInt(parentCoords.left, 10) - tooltip.offsetWidth - offset;
        }
        break;
      case 'right':
        left = (parentCoords.right - tooltip.offsetWidth);
        if (parseInt(parentCoords.right, 10) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltip.offsetWidth - offset;
        }
        if (posVertical === 'center') {
          left = parentCoords.right + offset;
        }
        break;
      default:
      case 'center':
        left = parseInt(parentCoords.left, 10) + ((parent.offsetWidth - tooltip.offsetWidth) / 2);
        if (posVertical === 'center') {
          top = parseInt(parentCoords.top, 10) - tooltip.offsetHeight - offset;
        }
    }

    if (left < 0) {
      left = parseInt(parentCoords.left, 10);
    }

    if (top < 0) {
      top = parseInt(parentCoords.bottom, 10) + offset;
      $q('.' + selectorName).classList.replace(
        selectorName + '-' + posHorizontal + '-top',
        selectorName + '-' + posHorizontal + '-bottom'
      );
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + pageYOffset + 'px';
  }
};
