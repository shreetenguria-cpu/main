self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("shreeji-v1").then(cache=>{
      return cache.addAll(["./","index.html","manifest.json"]);
    })
  );
});

window.onload = () => {
  const saved = localStorage.getItem("activeBrand") || "cafe";
  const btn = document.querySelector(`.brand-btn[onclick*="${saved}"]`);
  setBrand(saved, btn);
};


self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res||fetch(e.request))
  );
});
