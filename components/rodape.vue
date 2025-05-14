<template>
  <footer class="rodape">
    <div class="linha">
      <div class="label">VIDEO CALL</div>
      <div class="conteudo">
        <a class="call-button" href="#">
          <img class="avatar" src="/avatar.png" alt="Avatar" />
          <span>BOOK A CALL</span>
          <span class="arrow">↗</span>
        </a>
      </div>
    </div>

    <div class="linha">
      <div class="label">EMAIL</div>
      <div class="conteudo">
        <span class="email">seuemail@email.com</span>
      </div>
    </div>

    <div class="linha">
      <div class="label">CONNECT</div>
      <div class="conteudo">
        <a href="#" target="_blank">LINKEDIN</a>
        <a href="#" target="_blank">INSTAGRAM</a>
        <a href="#" target="_blank">X (TWITTER)</a>
      </div>
    </div>

    <div class="linha final">
      <div class="copy">© 2025</div>
      <button class="topo" @click="scrollToTop">BACK TO TOP ↑</button>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.rodape {
  background: #0a0a0a;
  color: #fff;
  padding: 6rem 2rem;
  font-family: sans-serif;
  border-top: 1px solid #222;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.linha {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #222;
  padding: 2rem 0;
  flex-wrap: wrap;
  gap: 1rem;
}

.label {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1 1 150px;
}

.conteudo {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 2 1 300px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.call-button {
  display: flex;
  align-items: center;
  background: #f7ff00;
  color: #000;
  font-weight: 600;
  border-radius: 999px;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.call-button:hover {
  transform: translateY(-2px);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.arrow {
  font-size: 1rem;
}

.email {
  font-family: monospace;
  background: #111;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
}

a {
  color: #fff;
  font-size: 0.9rem;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
}

a:hover {
  color: #1a00ff;
}

.final {
  border-bottom: none;
  margin-top: 4rem;
  padding-top: 3rem;
  font-size: 0.8rem;
  color: #666;
}

.copy {
  flex: 1 1 auto;
}

.topo {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75rem;
  transition: color 0.2s ease;
}

.topo:hover {
  color: #fff;
}
</style>