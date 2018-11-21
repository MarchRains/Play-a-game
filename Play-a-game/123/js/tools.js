function getEventPage(e){ e = e || window.event; return { pageX: e.pageX || document.documentElement.scrollLeft + e.clientX,
pageY: e.pageY || document.documentElement.scrollTop + e.clientY } }