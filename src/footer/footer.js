console.log(`js is load in footer`);

const copyright = $.createElement("div");
copyright.id = "copyright_div";
const copyrighttext = $.createTextNode(
  "Copyright(c) 2023 SoJuSo All rights reserved."
);
copyright.appendChild(copyrighttext);
$.getElementById("footer").appendChild(copyright);
